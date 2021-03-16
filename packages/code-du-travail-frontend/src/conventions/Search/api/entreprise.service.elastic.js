import debounce from "debounce-promise";
import fetch from "isomorphic-unfetch";
import memoizee from "memoizee";
import getConfig from "next/config";

import { ADRESSE_SEARCH } from "../searchHook";

const {
  publicRuntimeConfig: { API_SIRET2IDCC_URL, API_URL },
} = getConfig();

// TODO duplicated api siret2idcc call
const apiSiret2idcc = memoizee(
  (sirets) =>
    fetch(`${API_SIRET2IDCC_URL}/${sirets}`)
      .then((r) => r.json())
      .then((data) => (data.error && []) || data)
      .catch(() => []),
  { promise: true }
);

const getConventions = async ({ siret }) =>
  apiSiret2idcc(siret).then((result) => result.length && result[0].conventions);

// memoize search results
const cdtnEntrepriseFullText = memoizee(
  (query, address, searchType) => {
    const url = `${API_URL}/entreprises?q=${encodeURIComponent(
      query
    )}&t=${searchType}&a=${searchType == ADRESSE_SEARCH ? address : undefined}`;

    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json().then(({ enterprises }) =>
          Promise.all(
            enterprises.map((e) =>
              getConventions(e).then((c) => {
                e.conventions = c;
                return e;
              })
            )
          )
        );
      }
      throw new Error("Un problème est survenu.");
    });
  },
  { promise: true }
);

const searchEntrepriseES = debounce(cdtnEntrepriseFullText, 300);

export { searchEntrepriseES };
