const request = require("supertest");
const Koa = require("koa");
const router = require("../idcc");

const app = new Koa();
app.use(router.routes());

test("return idcc results for boulangerie", async () => {
  const response = await request(app.callback()).get(
    `/api/v1/idcc?q=boulangerie`
  );
  expect(response.status).toBe(200);
  expect(response.body.hits).toMatchSnapshot();
});

test("return idcc results for num 843", async () => {
  const response = await request(app.callback()).get(`/api/v1/idcc/843`);
  expect(response.status).toBe(200);
  expect(response.body).toMatchSnapshot();
});

test("returns 404 when IDCC with num not found", async () => {
  const response = await request(app.callback()).get(`/api/v1/idcc/8434`);
  expect(response.status).toBe(404);
});
