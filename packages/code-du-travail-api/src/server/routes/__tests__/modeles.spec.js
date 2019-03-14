const request = require("supertest");
const Koa = require("koa");
const router = require("../modeles");

const app = new Koa();
app.use(router.routes());

test("return all modeles results", async () => {
  const response = await request(app.callback()).get(`/api/v1/modeles`);
  expect(response.status).toBe(200);
  expect(response.body.hits).toMatchSnapshot();
});
