import { Client } from "@elastic/elasticsearch";
import { writeFile as _writeFile } from "fs";
import { promisify } from "util";
import { join } from "path";
import getDocumentByUrlQuery from "../src/server/routes/search/getDocumentByUrlQuery";
import { getSheetMTQuery } from "../src/server/routes/sheets-mt/search.elastic.js";
import getAgreementBody from "../src/server/routes/conventions/getAgreementBySlug.elastic.js";
import {
  DOCUMENTS,
  MT_SHEETS,
  AGREEMENTS
} from "@cdt/data/indexing/esIndexName";

import themes from "@cdt/data...datafiller/themes.data.json";

const writeFile = promisify(_writeFile);

const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";

const client = new Client({
  node: `${ELASTICSEARCH_URL}`,
  log: [{ type: "stdio", levels: ["error", "warning"] }]
});

const documentsSlugs = [
  "/themes/81-demission",
  "/themes/1-embauche-et-contrat-de-travail",
  "/fiche-service-public/demission-dun-salarie",
  "/fiche-service-public/demission-dune-assistante-maternelle",
  "/fiche-ministere-travail/la-demission#Comment-presenter-une-demission",
  "/fiche-ministere-travail/la-demission#L-absence-prolongee-du-salarie-est-elle-une-demission",
  "/code-du-travail/r1225-18",
  "/code-du-travail/l1237-1",
  "/outils/preavis-demission",
  "/outils/indemnite-licenciement",
  "/modeles-de-courriers/demande-de-rendez-vous-en-vue-dune-rupture-conventionnelle",
  "/modeles-de-courriers/rupture-de-periode-dessai-a-linitiative-de-lemployeur",
  "/convention-collective/1747-activites-industrielles-de-boulangerie-et-patisserie",
  "/convention-collective/843-boulangerie-patisserie-entreprises-artisanales",
  "/external/mon-compte-formation",
  "/external/index-egapro"
];

const themesSlugs = ["8-depart-de-lentreprise", "81-demission"];

const agreementSlugs = [
  "1596-batiment-ouvriers-entreprises-occupant-jusqua-10-salaries"
];

const ficheMTSlugs = [
  "5-questions-reponses-sur-la-sante-au-travail",
  "5-questions-reponses-sur-le-recours-devant-les-prudhommes",
  "5-questions-reponses-sur-le-compte-personnel-dactivite",
  "5-questions-reponses-sur-la-validation-des-acquis-de-lexperience-vae"
];

const ES_INDEX_PREFIX = process.env.ES_INDEX_PREFIX || "cdtn";

async function updateDocumentsData(slugs) {
  const index = `${ES_INDEX_PREFIX}_${DOCUMENTS}`;
  const requests = slugs.reduce((state, slug) => {
    state.push({ index });
    state.push(getDocumentByUrlQuery(slug, []));
    return state;
  }, []);
  try {
    const { body } = await client.msearch({ body: requests });
    const data = [];
    for (const res of body.responses) {
      if (res.hits.hits.length === 1) {
        const [item] = res.hits.hits;
        data.push(item._source);
      }
    }
    await writeFile(
      join(__dirname, "./cdtn_document.data.json"),
      JSON.stringify(data, 0, 2)
    );
  } catch (error) {
    console.error(error.meta || error);
  }
}
async function updateThemes(slugs) {
  const data = themes.filter(({ slug }) => slugs.includes(slug));
  await writeFile(
    join(__dirname, "./cdtn_theme.data.json"),
    JSON.stringify(data, 0, 2)
  );
}

async function updateFichesMT(slugs) {
  const index = `${ES_INDEX_PREFIX}_${MT_SHEETS}`;
  const requests = [];
  slugs.forEach(slug => {
    requests.push({ index });
    requests.push(getSheetMTQuery({ slug }));
  });
  try {
    const { body } = await client.msearch({ body: requests });
    const data = [];
    body.responses.forEach(res => {
      if (res.hits.hits.length === 1) {
        const [item] = res.hits.hits;
        data.push(item._source);
      }
    });
    await writeFile(
      join(__dirname, "./fiches_ministere_travail.data.json"),
      JSON.stringify(data, 0, 2)
    );
  } catch (error) {
    console.error(error.meta || error);
  }
}

async function updateAgreements(slugs) {
  const index = `${ES_INDEX_PREFIX}_${AGREEMENTS}`;
  const requests = [];
  slugs.forEach(slug => {
    requests.push({ index });
    requests.push(getAgreementBody({ slug }));
  });
  try {
    const { body } = await client.msearch({ body: requests });
    const data = [];
    body.responses.forEach(res => {
      if (res.hits.hits.length === 1) {
        const [item] = res.hits.hits;
        data.push(item._source);
      }
    });
    await writeFile(
      join(__dirname, "./cdtn_agreement.data.json"),
      JSON.stringify(data, 0, 2)
    );
  } catch (error) {
    console.error(error.meta || error);
  }
}

if (module === require.main) {
  updateDocumentsData(documentsSlugs).catch(error =>
    console.error("›››" + error)
  );
  updateThemes(themesSlugs).catch(error => console.error("›››" + error));
  updateFichesMT(ficheMTSlugs).catch(error => console.error("›››" + error));
  updateAgreements(agreementSlugs).catch(error => console.error("›››" + error));
}
