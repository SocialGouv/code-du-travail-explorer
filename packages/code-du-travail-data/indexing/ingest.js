import { Client } from "@elastic/elasticsearch";
import { SOURCES } from "@socialgouv/cdtn-sources";
import PQueue from "p-queue";
import retry from "p-retry";

import { documentMapping } from "./document.mapping";
import {
  createIndex,
  deleteOldIndex,
  indexDocumentsBatched,
  version,
} from "./esClientUtils";
import { DOCUMENTS, SUGGESTIONS } from "./esIndexName";
import { logger } from "./logger";
import { fetchCovisits } from "./monolog";
import { cdtnDocumentsGen } from "./populate";
import { populateSuggestions } from "./suggestion";
import { vectorizeDocument } from "./vectorizer";

const ES_INDEX_PREFIX = process.env.ES_INDEX_PREFIX || "cdtn";

const DOCUMENT_INDEX_NAME = `${ES_INDEX_PREFIX}_${DOCUMENTS}`;
const SUGGEST_INDEX_NAME = `${ES_INDEX_PREFIX}_${SUGGESTIONS}`;

const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";

const NLP_URL = process.env.NLP_URL;

logger.info(`ElasticSearch at ${ELASTICSEARCH_URL}`);

const esClientConfig = {
  node: `${ELASTICSEARCH_URL}`,
};

switch (process.env.NODE_ENV) {
  case "production":
    esClientConfig.auth = {
      password: process.env.ELASTICSEARCH_PWD,
      username: process.env.ELASTICSEARCH_USER || "elastic",
    };
    break;
}

const client = new Client(esClientConfig);

logger.info(
  `connecting to ${ELASTICSEARCH_URL} with user ${ELASTICSEARCH_USER}`
);

export async function addVector(data) {
  if (NLP_URL) {
    if (!data.title) {
      logger.error(`No title for document ${data.source} / ${data.slug}`);
    }
    const title = data.title || "sans titre";
    await vectorizeDocument(title, data.text)
      .then((title_vector) => {
        if (title_vector.message) {
          throw new Error(`error fetching ${data.title}`);
        }
        data.title_vector = title_vector;
      })
      .catch((err) => {
        logger.error(`error fetching ${data.title}`, err.message);
      });
  }

  return Promise.resolve(data);
}

// these sources do not need NLP vectorization
const excludeSources = [
  SOURCES.CDT,
  SOURCES.GLOSSARY,
  SOURCES.PREQUALIFIED,
  SOURCES.HIGHLIGHTS,
  SOURCES.SHEET_MT_PAGE,
  SOURCES.CCN_PAGE,
  SOURCES.VERSIONS,
];

async function main() {
  const ts = Date.now();
  const nlpQueue = new PQueue({ concurrency: 5 });

  const monologQueue = new PQueue({ concurrency: 20 });

  if (NLP_URL) {
    logger.debug(`Using NLP service to retrieve tf vectors on ${NLP_URL}`);
  } else {
    logger.debug(`NLP_URL not defined, semantic search will be disabled.`);
  }

  await version({ client });

  // Indexing documents/search data
  await createIndex({
    client,
    indexName: `${DOCUMENT_INDEX_NAME}-${ts}`,
    mappings: documentMapping,
  });
  const t0 = Date.now();
  for await (const docsIds of cdtnDocumentsGen()) {
    logger.info(`› ${docsIds[0].source}... ${docsIds.length} items`);

    // add covisits using pQueue (there is a plan to change this : see #2915)
    const pDocs = docsIds.map((doc) =>
      monologQueue.add(() => fetchCovisits(doc))
    );
    const docs = await Promise.all(pDocs);

    // add NLP vectors
    if (excludeSources.includes(docs[0].source)) {
      await indexDocumentsBatched({
        client,
        docs,
        indexName: `${DOCUMENT_INDEX_NAME}-${ts}`,
      });
    } else {
      const pDocs = docs.map((doc) =>
        nlpQueue.add(() => retry(() => addVector(doc), { retries: 3 }))
      );
      const documents = await Promise.all(pDocs);

      await indexDocumentsBatched({
        client,
        documents,
        indexName: `${DOCUMENT_INDEX_NAME}-${ts}`,
      });
    }
  }

  logger.info(`done in ${(Date.now() - t0) / 1000} s`);

  // Indexing Suggestions
  await populateSuggestions(client, `${SUGGEST_INDEX_NAME}-${ts}`);

  // Creating aliases
  await client.indices.updateAliases({
    body: {
      actions: [
        {
          remove: {
            alias: `${DOCUMENT_INDEX_NAME}`,
            index: `${DOCUMENT_INDEX_NAME}-*`,
          },
        },
        {
          remove: {
            alias: `${SUGGEST_INDEX_NAME}`,
            index: `${SUGGEST_INDEX_NAME}-*`,
          },
        },

        {
          add: {
            alias: `${DOCUMENT_INDEX_NAME}`,
            index: `${DOCUMENT_INDEX_NAME}-${ts}`,
          },
        },
        {
          add: {
            alias: `${SUGGEST_INDEX_NAME}`,
            index: `${SUGGEST_INDEX_NAME}-${ts}`,
          },
        },
      ],
    },
  });

  const patterns = [DOCUMENT_INDEX_NAME, SUGGEST_INDEX_NAME];

  await deleteOldIndex({ client, patterns, timestamp: ts });
}

main().catch((response) => {
  if (response.body) {
    logger.error({ statusCode: response.meta.statusCode });
    logger.error({ name: response.name });
    logger.error({ request: response.meta.meta.request });
  } else {
    logger.error({ response });
  }
  process.exit(-1);
});
