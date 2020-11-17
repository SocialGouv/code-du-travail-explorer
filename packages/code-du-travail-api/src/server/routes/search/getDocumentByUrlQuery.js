const { getDataFromUrl } = require("./utils");

// get ES document related to given url
const getDocumentByUrlQuery = (
  url,
  _source = [
    "title",
    "source",
    "slug",
    "description",
    "url",
    "action",
    "breadcrumbs",
    "cdtnId",
  ]
) => {
  const { slug, source } = getDataFromUrl(url);
  if (!source) return;
  return {
    _source,
    query: {
      bool: {
        filter: [
          { term: { slug } },
          { term: { source } },
          { term: { isPublished: true } },
        ],
      },
    },
    size: 1,
  };
};

module.exports = getDocumentByUrlQuery;
