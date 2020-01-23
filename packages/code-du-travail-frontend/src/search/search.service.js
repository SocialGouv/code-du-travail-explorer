import getConfig from "next/config";
import memoizee from "memoizee";
import fetch from "isomorphic-unfetch";

import pDebounce from "../lib/pDebounce";

const {
  publicRuntimeConfig: { API_URL }
} = getConfig();

const fetchSearchResults = async (query = "", excludeSources = "") => {
  const url = `${API_URL}/search?q=${encodeURIComponent(
    query
  )}&excludeSources=${encodeURIComponent(excludeSources)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Un problème est survenu.");
  }
  const json = await response.json();
  return json;
};

const fetchSuggestResults = async query => {
  const url = `${API_URL}/suggest?q=${query}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("suggester: Un problème est survenu.");
  }
  return response.json();
};

const suggestMin = query =>
  query.length > 2 ? fetchSuggestResults(query) : Promise.resolve([]);

// memoize search results
const fetchSearchResultsMemoized = memoizee(fetchSearchResults, {
  promise: true,
  length: 1 // ensure memoize work for function with es6 default params
});

// memoize suggestions results
const fetchSuggestResultsMemoized = memoizee(suggestMin, {
  promise: true,
  length: 1 // ensure memoize work for function with es6 default params
});

// debounce memoized suggestions results
const fetchSuggestResultsDebounced = pDebounce(
  fetchSuggestResultsMemoized,
  200
);

export {
  fetchSuggestResultsDebounced as fetchSuggestResults,
  fetchSearchResultsMemoized as fetchSearchResults
};
