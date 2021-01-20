const Router = require("koa-router");

const { entrepriseSearchBody, mapHit } = require("./searchEntreprise");
const API_BASE_URL = require("../v1.prefix");
const elasticsearchClient = require("../../conf/elasticsearch.js");
const { logger } = require("../../utils/logger");

// const ES_INDEX_PREFIX = process.env.ES_INDEX_PREFIX || "cdtn";
// const index = `${ES_INDEX_PREFIX}_${DOCUMENTS}`;
const index = "cdtn-siren";

const router = new Router({ prefix: API_BASE_URL });

/**
 * Return the enterprises that match the search query
 *
 * @example
 * http://localhost:1337/api/v1/entreprises/
 *
 * @param {string} querystring.q A `q` querystring param containing the query to process.
 * @returns {Object} enterprise search results
 */
router.get("/entreprises", async (ctx) => {
  const { q: query } = ctx.query;
  logger.info(query);

  const body = entrepriseSearchBody(query);
  const response = await elasticsearchClient.search({ body, index });
  if (response.body.hits.total.value === 0) {
    ctx.throw(404, `enterprises not found, no entreprise matching ${query}`);
  }

  ctx.body = { enterprises: response.body.hits.hits.map(mapHit) };
});

module.exports = router;
