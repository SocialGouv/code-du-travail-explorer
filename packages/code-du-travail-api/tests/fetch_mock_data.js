import { Client } from "@elastic/elasticsearch";
import { writeFile as _writeFile } from "fs";
import { promisify } from "util";
import { join } from "path";
import getDocumentByUrlQuery from "../src/server/routes/search/getDocumentByUrlQuery";
import { getSheetMTQuery } from "../src/server/routes/sheets-mt/search.elastic.js";
import getAgreementBody from "../src/server/routes/conventions/getAgreementBySlug.elastic.js";

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
  "/fiche-ministere-travail/la-demission-comment-presenter-une-demission",
  "/fiche-ministere-travail/demission-labsence-prolongee-du-salarie-est-elle-une-demission",
  "/code-du-travail/r1225-18",
  "/code-du-travail/l1237-1",
  "/outils/preavis-demission",
  "/outils/indemnite-licenciement",
  "/modeles-de-courriers/modele-rupture-dun-commun-accord-dun-contrat-a-duree-determinee",
  "/modeles-de-courriers/modele-rupture-de-periode-dessai-a-linitiative-de-lemployeur",
  "/convention-collective/1747-convention-collective-nationale-des-activites-industrielles-de-boulangerie",
  "/convention-collective/0843-convention-collective-nationale-de-la-boulangerie-patisserie-du-19-mars-197",
  "/outils-externe/mon-compte-formation",
  "/external/mon-compte-formation",
  "/external/index-egapro"
];

const themesSlugs = ["8-depart-de-lentreprise", "81-demission"];

const agreementSlugs = [
  "1596-nouvelle-convention-collective-nationale-des-ouvriers-employes-par-les-entr"
];

const ficheMTSlugs = [
  "5-questions-reponses-sur-la-sante-au-travail",
  "5-questions-reponses-sur-le-recours-devant-les-prudhommes",
  "5-questions-reponses-sur-le-compte-personnel-dactivite",
  "5-questions-reponses-sur-la-validation-des-acquis-de-lexperience-vae"
];

async function updateDocumentsData(slugs) {
  const index =
    process.env.ELASTICSEARCH_DOCUMENT_INDEX || "code_du_travail_numerique";
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
  const index =
    process.env.ELASTICSEARCH_SHEETS_MT_INDEX ||
    "cdtn_fiches_ministere_du_travail";
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
  const index =
    process.env.ELASTICSEARCH_CONVENTION_INDEX || "conventions_collectives";
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
