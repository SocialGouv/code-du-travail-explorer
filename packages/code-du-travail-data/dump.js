import { cdtnDocumentsGen } from "./indexing/populate";
import { logger } from "./indexing/logger";

logger.silent = true;

const dump = async () => {
  let documents = [];
  for await (const docs of cdtnDocumentsGen()) {
    documents = documents.concat(docs);
  }
  //eslint-disable-next-line no-console
  console.log(JSON.stringify(documents, 0, 2));
};

dump();
