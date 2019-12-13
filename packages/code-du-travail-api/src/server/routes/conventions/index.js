const Router = require("koa-router");
const API_BASE_URL = require("../v1.prefix");
const getAgreementBody = require("./getAgreementBySlug.elastic");

const elasticsearchClient = require("../../conf/elasticsearch.js");

const index =
  process.env.ELASTICSEARCH_CONVENTION_INDEX || "conventions_collectives";

const router = new Router({ prefix: API_BASE_URL });

/**
 * Return the convention collective data that matches the given idcc and type
 *
 * @example
 * http://localhost:1337/api/v1/conventions/200/base
 *
 * @param {string} :idcc the IDCC number
 * @param {string} :type the type of texte requested (either none or "base", "attache", "salaire")
 * @returns {Object} some convention data.
 */
router.get("/conventions/:slug", async ctx => {
  const { slug } = ctx.params;
  const body = getAgreementBody({ slug });
  const response = await elasticsearchClient.search({ index, body });
  if (response.body.hits.total.value === 0) {
    ctx.throw(404, `agreement not found, no agreement match ${slug}`);
  }

  ctx.body = { ...response.body.hits.hits[0]._source };
});

module.exports = router;
