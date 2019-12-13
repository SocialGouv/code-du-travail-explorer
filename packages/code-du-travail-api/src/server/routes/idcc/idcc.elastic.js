function getIdccBody({ query }) {
  return {
    size: 1000,
    _source: ["id", "title", "url", "idcc", "slug"],
    query: {
      bool: {
        filter: [
          {
            term: {
              source: "conventions_collectives"
            }
          }
        ],
        must: {
          bool: {
            should: [
              {
                match: {
                  "title.french": {
                    query: `${query}`,
                    fuzziness: "AUTO",
                    boost: ".9"
                  }
                }
              },
              {
                match_phrase_prefix: {
                  "idcc.text": {
                    query: `${query}`
                  }
                }
              },
              {
                match_phrase_prefix: {
                  "title.french": {
                    query: `${query}`
                  }
                }
              }
            ]
          }
        }
      }
    }
  };
}

module.exports = getIdccBody;
