import { documentMapping } from "@cdt/data/indexing/document.mapping";
import {
  createIndex,
  indexDocumentsBatched,
  version,
} from "@cdt/data/indexing/esClientUtils";
import { DOCUMENTS, SUGGESTIONS } from "@cdt/data/indexing/esIndexName";
import { suggestionMapping } from "@cdt/data/indexing/suggestion.mapping";

import client from "../src/server/conf/elasticsearch";
import documents from "./cdtn_document.data.json";
import suggestions from "./suggestions_data.json";

const ES_INDEX_PREFIX = process.env.ES_INDEX_PREFIX || "cdtn_test";

const documentsIndexName = `${ES_INDEX_PREFIX}_${DOCUMENTS}`;
const suggestionsIndexName = `${ES_INDEX_PREFIX}_${SUGGESTIONS}`;

async function main() {
  await version({ client });
  await createIndex({
    client,
    indexName: documentsIndexName,
    mappings: documentMapping,
  });
  await indexDocumentsBatched({
    client,
    documents: documents,
    indexName: documentsIndexName,
  });

  await createIndex({
    client,
    indexName: suggestionsIndexName,
    mappings: suggestionMapping,
  });
  await indexDocumentsBatched({
    client,
    documents: suggestions,
    indexName: suggestionsIndexName,
  });
}

main();
