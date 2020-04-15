export const documentMapping = {
  properties: {
    description: { type: "text" },
    metaDescription: { type: "text" },
    // available for themes
    children: {
      properties: {
        title: { type: "text" },
        slug: { type: "text" },
      },
    },
    // available for themes
    icon: { type: "keyword" },
    // available for themes
    position: { type: "keyword" },
    // available for themes
    refs: {
      properties: {
        title: { type: "text" },
        url: { type: "keyword" },
      },
    },
    // available for themes
    breadcrumbs: {
      properties: {
        label: { type: "text" },
        slug: { type: "keyword" },
      },
    },
    // available for tools
    action: { type: "text" },
    // Indicates the origin of the document, e.g. 'code_du_travail', 'fiches_service_public' etc.
    source: {
      type: "keyword",
    },
    // The local document slug
    slug: {
      type: "keyword",
    },
    // The source URL
    url: {
      type: "keyword",
    },
    title_vector: {
      type: "dense_vector",
      dims: 512,
    },
    title: {
      type: "text",
      fields: {
        article_id: {
          type: "text",
          analyzer: "article_id_analyzer",
        },
        french: {
          type: "text",
          analyzer: "french_indexing",
          search_analyzer: "french",
        },
        french_with_synonyms: {
          type: "text",
          analyzer: "french_with_synonyms",
        },
      },
    },
    text: {
      type: "text",
      fields: {
        french: {
          type: "text",
          analyzer: "french",
        },
        french_with_synonyms: {
          type: "text",
          analyzer: "french_with_synonyms",
        },
      },
    },
    // Currently only available for `Fiches service public`.
    tags: {
      type: "text",
      analyzer: "french",
      fields: {
        keywords: {
          type: "text",
          analyzer: "keyword",
        },
      },
    },
    // Currently only available for `Code du travail`.
    path: {
      type: "text",
      analyzer: "french",
    },
    themes: {
      type: "keyword",
    },
    theme: {
      type: "keyword",
    },
    shortTitle: {
      type: "text",
      fields: {
        french: {
          type: "text",
          analyzer: "french_indexing",
          search_analyzer: "french",
        },
      },
    },
    idcc: {
      type: "keyword",
      fields: {
        text: {
          type: "text",
        },
      },
    },
    effectif: {
      type: "rank_feature",
    },
    ape: {
      type: "text",
      analyzer: "idcc_ape",
    },
    excludeFromSearch: {
      type: "boolean",
    },
  },
};
