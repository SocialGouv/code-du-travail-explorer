FROM node:12.19-alpine3.10

# NOTE(douglasduteil): add `curl` in the master image
# `curl` is very useful for later health check tests ;)
RUN apk add --no-cache git=~2 curl=~7

#

WORKDIR /app

#

COPY ./scripts /app/scripts

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

COPY ./packages/code-du-travail-data/package.json /app/packages/code-du-travail-data/package.json
COPY ./packages/code-du-travail-data/dataset/courrier-type/package.json /app/packages/code-du-travail-data/dataset/courrier-type/package.json
COPY ./packages/code-du-travail-data/dataset/prime-precarite/package.json /app/packages/code-du-travail-data/dataset/prime-precarite/package.json
COPY ./packages/code-du-travail-data/dataset/simulateurs/package.json /app/packages/code-du-travail-data/dataset/simulateurs/package.json
COPY ./packages/code-du-travail-data/dataset/stats/package.json /app/packages/code-du-travail-data/dataset/stats/package.json
COPY ./packages/code-du-travail-data/dataset/stop_words/package.json /app/packages/code-du-travail-data/dataset/stop_words/package.json
COPY ./packages/code-du-travail-data/dataset/synonyms/package.json /app/packages/code-du-travail-data/dataset/synonyms/package.json
COPY ./packages/code-du-travail-data/dataset/tools/package.json /app/packages/code-du-travail-data/dataset/tools/package.json
COPY ./packages/react-fiche-service-public/package.json /app/packages/react-fiche-service-public/package.json
COPY ./packages/sources/package.json /app/packages/sources/package.json
COPY ./packages/slugify/package.json /app/packages/slugify/package.json


# PERF(douglasduteil): put packages that are more likely to change in order here
# By order of "more likely to change" the frontend, the api, etc... are changing
# more often than the dataset.
# Putting them after will optimise the native docker build cache of the image
COPY ./packages/react-ui/package.json /app/packages/react-ui/package.json
COPY ./packages/code-du-travail-api/package.json /app/packages/code-du-travail-api/package.json
COPY ./packages/code-du-travail-frontend/package.json /app/packages/code-du-travail-frontend/package.json


RUN yarn --frozen-lockfile && yarn cache clean

#

COPY ./lerna.json /app/lerna.json
COPY ./packages /app/packages

ARG ES_LOGS
ENV ES_LOGS=$ES_LOGS
ARG ES_LOGS_TOKEN
ENV ES_LOGS_TOKEN=$ES_LOGS_TOKEN
ARG CDTN_ADMIN_ENDPOINT
ENV CDTN_ADMIN_ENDPOINT=$CDTN_ADMIN_ENDPOINT
RUN yarn build
