const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

// const corsConf = require('./conf/cors')

const docsCount = require("./routes/docs-count");
const idccRoutes = require("./routes/idcc");
const conventionsRoutes = require("./routes/conventions");
const itemsRoutes = require("./routes/items");
const modelesRoutes = require("./routes/modeles");
const searchRoutes = require("./routes/search");
const sheetMTRoutes = require("./routes/sheets-mt");
const versionRoutes = require("./routes/version");
const docsRoutes = require("./routes/docs");
const themesRoute = require("./routes/themes");
const suggestRoute = require("./routes/suggest");

const { logger } = require("./utils/logger");

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(cors());
/**
 * use a middleware for catching errors and re-emit them
 * so we can centralize error handling / logging
 * https://github.com/koajs/koa/wiki/Error-Handling
 */
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    logger.error(error);
    const { statusCode = 500, message } = error;
    ctx.throw(statusCode, message);
    ctx.app.emit("error", error);
  }
});

/**
 * use a middleware for IE 10+ http xmlhttp requests
 * https://blogs.msdn.microsoft.com/ieinternals/2013/09/17/a-quick-look-at-p3p/
 */
app.use(async (ctx, next) => {
  ctx.set("P3P", "NOI ADM DEV PSAi OUR OTRo STP IND COM NAV DEM");
  await next();
});

app.use(bodyParser());

app.use(docsCount.routes());
app.use(idccRoutes.routes());
app.use(conventionsRoutes.routes());
app.use(modelesRoutes.routes());
app.use(searchRoutes.routes());
app.use(sheetMTRoutes.routes());
app.use(itemsRoutes.routes());
app.use(versionRoutes.routes());
app.use(themesRoute.routes());
app.use(suggestRoute.routes());

app.use(docsRoutes);

if (process.env.NODE_ENV !== "production") {
  console.log("-- DEV MODE ---");
}

// centralize error logging
app.on("error", ({ statusCode, message }) => {
  logger.error(`${statusCode} - ${message}`);
});

// Server.
const server = app.listen(PORT, () => {
  logger.info(`Server listening on port: ${PORT}`);
});

module.exports = server;
