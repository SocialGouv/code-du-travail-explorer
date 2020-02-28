export const documentMapping = {
  properties: {
    description: { type: "text" },
    icon: { type: "keyword" },
    action: { type: "text" },
    // Indicates the origin of the document, e.g. 'code_du_travail', 'fiches_service_public' etc.
    source: {
      type: "keyword"
    },
    // The local document slug
    slug: {
      type: "keyword"
    },
    // The source URL
    url: {
      type: "keyword"
    },
    title_vector: {
      type: "dense_vector",
      dims: 512
    },
    title: {
      type: "text",
      fields: {
        article_id: {
          type: "text",
          analyzer: "article_id_analyzer"
        },
        french: {
          type: "text",
          analyzer: "french_indexing",
          search_analyzer: "french"
        },
        french_with_synonyms: {
          type: "text",
          analyzer: "french_with_synonyms"
        }
      }
    },
    text: {
      type: "text",
      fields: {
        french: {
          type: "text",
          analyzer: "french"
        },
        french_with_synonyms: {
          type: "text",
          analyzer: "french_with_synonyms"
        }
      }
    },
    // Currently only available for `Fiches service public`.
    tags: {
      type: "text",
      analyzer: "french",
      fields: {
        keywords: {
          type: "text",
          analyzer: "keyword"
        }
      }
    },
    // Currently only available for `Code du travail`.
    path: {
      type: "text",
      analyzer: "french"
    },
    themes: {
      type: "keyword"
    },
    breadcrumbs: {
      properties: {
        label: { type: "text" },
        slug: { type: "keyword" }
      }
    },
    theme: {
      type: "keyword"
    },
    shortTitle: {
      type: "text",
      fields: {
        french: {
          type: "text",
          analyzer: "french_indexing",
          search_analyzer: "french"
        }
      }
    },
    idcc: {
      type: "keyword",
      fields: {
        text: {
          type: "text"
        }
      }
    },
    ape: {
      type: "text",
      analyzer: "idcc_ape"
    },
    excludeFromSearch: {
      type: "boolean"
    }
  }
};
