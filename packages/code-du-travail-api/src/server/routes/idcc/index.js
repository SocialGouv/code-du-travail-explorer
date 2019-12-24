const Router = require("koa-router");
const { DOCUMENTS } = require("@cdt/data/indexing/esIndexName");

const API_BASE_URL = require("../v1.prefix");

const elasticsearchClient = require("../../conf/elasticsearch.js");
const getIdccBody = require("./idcc.elastic");

const ES_INDEX_PREFIX = process.env.ES_INDEX_PREFIX || "cdtn";
const index = `${ES_INDEX_PREFIX}_${DOCUMENTS}`;

const router = new Router({ prefix: API_BASE_URL });

/**
 * Return documents matching the given query.
 *
 * @example
 * http://localhost:1337/api/v1/idcc?q=banlangerie
 * http://localhost:1337/api/v1/idcc?q=843
 * http://localhost:1337/api/v1/idcc?q=1020Z
 *
 * @param {string} querystring.q A `q` querystring param containing the query to process.
 * @returns {Object} Results.
 */
router.get("/idcc", async ctx => {
  const body = getIdccBody({ query: ctx.request.query.q });

  const response = await elasticsearchClient.search({ index, body });
  ctx.body = response.body;
});

module.exports = router;
