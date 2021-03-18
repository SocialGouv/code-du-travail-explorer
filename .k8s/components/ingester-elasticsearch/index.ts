import { ok } from "assert";
import env from "@kosko/env";
import type { SealedSecret } from "@kubernetes-models/sealed-secrets/bitnami.com/v1alpha1/SealedSecret";
import { Job } from "kubernetes-models/batch/v1/Job";
import gitlab from "@socialgouv/kosko-charts/environments/gitlab";
import { loadYaml } from "@socialgouv/kosko-charts/utils/getEnvironmentComponent";
import { merge } from "@socialgouv/kosko-charts/utils/@kosko/env/merge";
import { ConfigMap } from "kubernetes-models/_definitions/IoK8sApiCoreV1ConfigMap";

ok(process.env.CI_REGISTRY_IMAGE, "Missing CI_REGISTRY_IMAGE");
ok(process.env.ES_INDEX_PREFIX, "Missing ES_INDEX_PREFIX");

const configMap = loadYaml<ConfigMap>(
  env,
  `ingester-elasticsearch.configmap.yaml`
);
ok(configMap, "Missing ingester-elasticsearch.configmap.yaml");
const secret = loadYaml<SealedSecret>(
  env,
  "ingester-elasticsearch.sealed-secret.yaml"
);
ok(secret, "Missing ingester-elasticsearch.sealed-secret.yaml");

const ingester = () => {
  const envParams = merge(gitlab(process.env), {});

  const job = new Job({
    metadata: {
      name: `ingester-elasticsearch-${process.env.CI_JOB_ID}`,
      namespace: envParams.namespace.name,
    },
    spec: {
      backoffLimit: 0,
      template: {
        spec: {
          containers: [
            {
              name: "ingester-elasticsearch",
              image: `${process.env.CI_REGISTRY_IMAGE}/ingester-elasticsearch:${process.env.CI_COMMIT_SHA}`,
              imagePullPolicy: "IfNotPresent",
              resources: {
                limits: {
                  cpu: "1",
                  memory: "1Gi",
                },
                requests: {
                  cpu: "500m",
                  memory: "512Mi",
                },
              },
              envFrom: [
                {
                  configMapRef: {
                    name: configMap?.metadata?.name,
                  },
                },
                {
                  secretRef: {
                    name: secret?.metadata?.name,
                  },
                },
              ],
              env: [
                {
                  name: "ES_INDEX_PREFIX",
                  value: `${process.env.ES_INDEX_PREFIX}-${process.env.CI_ENVIRONMENT_SLUG}`,
                },
              ],
            },
          ],
          restartPolicy: "Never",
        },
      },
      ttlSecondsAfterFinished: 86400,
    },
  });
  return job;
};

export default [configMap, secret, ingester()];
