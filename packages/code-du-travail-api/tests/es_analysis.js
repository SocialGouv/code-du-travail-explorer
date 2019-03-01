const synonyms = require("@cdt/data...synonyms");
const stopwords = require("@cdt/data...stopwords");

const filter = {
  // Normalize acronyms so that no matter the format, the resulting token will be the same.
  // E.g.: SmiC => S.M.I.C. => SMIC => smic.
  french_acronyms: {
    type: "word_delimiter",
    catenate_all: true,
    generate_word_parts: false,
    generate_number_parts: false
  },
  // Remove elision (l'avion => avion)
  // ne prend pas en compte la casse (L'avion = l'avion = avion)
  french_elision: {
    type: "elision",
    articles_case: true,
    articles: [
      "l",
      "m",
      "t",
      "qu",
      "n",
      "s",
      "j",
      "d",
      "c",
      "jusqu",
      "quoiqu",
      "lorsqu",
      "puisqu",
      "parce qu",
      "parcequ",
      "entr",
      "presqu",
      "quelqu"
    ]
  },
  // liste de termes et leurs synonymes
  french_synonyms: {
    type: "synonym",
    ignore_case: true,
    expand: true,
    synonyms: synonyms
  },
  // Il existe 3 stemmer pour le francais french, light_french, minimal_french
  // light french et le median
  french_stemmer: {
    type: "stemmer",
    language: "light_french"
  },
  french_stop: {
    type: "stop",
    stopwords: stopwords
  }
};

const analyzer = {
  idcc_ape: {
    tokenizer: "whitespace"
  },
  french_stemmed: {
    tokenizer: "icu_tokenizer",
    char_filter: ["html_strip"],
    filter: [
      "french_elision",
      "icu_folding",
      "lowercase",
      "french_acronyms",
      "french_synonyms",
      "french_stop",
      "french_stemmer"
    ]
  },
  french: {
    tokenizer: "icu_tokenizer",
    filter: ["french_elision", "icu_folding", "french_stop", "french_stemmer"]
  },
  french_indexing: {
    tokenizer: "icu_tokenizer",
    char_filter: ["startwith"],
    filter: ["french_elision", "icu_folding", "french_stop", "french_stemmer"]
  },
  article_id_analyzer: {
    tokenizer: "article_id_tokenizer",
    filter: ["lowercase", "french_acronyms"]
  }
};

const char_filter = {
  startwith: {
    type: "pattern_replace",
    pattern: "^(.*)",
    replacement: "__start__ $1"
  }
};

const tokenizer = {
  article_id_tokenizer: {
    type: "simple_pattern",
    pattern: "[LRD].*[0123456789]{4}.?[0123456789]{1,3}"
  }
};

module.exports = {
  char_filter,
  analyzer,
  filter,
  tokenizer
};
