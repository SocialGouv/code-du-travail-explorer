//

import { getEnvManifests } from "@socialgouv/kosko-charts/testing";
import { project } from "@socialgouv/kosko-charts/testing/fake/gitlab-ci.env";

jest.setTimeout(1000 * 60);
test("kosko generate --preprod", async () => {
  process.env.HARBOR_PROJECT = "cdtn";
  process.env.ES_INDEX_PREFIX = "cdtn-preprod";
  expect(
    await getEnvManifests("preprod", "", {
      ...project("code-du-travail-numerique").preprod,
      RANCHER_PROJECT_ID: "c-bar:p-foo",
    })
  ).toMatchSnapshot();
});
