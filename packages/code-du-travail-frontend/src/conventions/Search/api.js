import { formatIdcc, parseIdcc } from "@cdt/data/lib";

import getQueryType from "./getQueryType";
import { searchConvention } from "../convention.service";
import {
  searchEntrepriseByName,
  searchEntrepriseBySiret
} from "../entreprise.service";

// build a result list based on query type
export const loadResults = async query => {
  const type = getQueryType(query);
  // when text, combine local CCNs search + API sirene fulltext
  if (type === "text") {
    // local CCNS list search
    const promiseCCn = searchConvention(query.trim()).then(ccns =>
      ccns.map(ccn => ({
        type: "convention",
        id: ccn.id,
        label: `IDCC ${formatIdcc(ccn.num)}`,
        conventions: [ccn]
      }))
    );

    // fulltext search API Sirene
    const promiseEtablissements = searchEntrepriseByName(
      query.trim()
    ).then(etablissements =>
      etablissements.filter(r => r.conventions && r.conventions.length)
    );

    const [ccn, etablissements] = await Promise.all([
      promiseCCn,
      promiseEtablissements
    ]);
    return ccn.concat(etablissements);
    // direct search by siret with API sirene
  }
  if (type === "siret") {
    const etablissement = await searchEntrepriseBySiret(
      query.replace(/[\s .-]/g, "")
    );
    return (etablissement && [etablissement]) || [];
    // search local idcc list
  }
  if (type === "idcc") {
    const matches = await searchConvention(parseIdcc(query));
    // only show 1 result when perfect
    const perfectMatch =
      matches &&
      matches.length &&
      matches.find(match => parseIdcc(match.idcc) === parseIdcc(query));
    if (perfectMatch) {
      return [
        {
          type: "convention",
          id: query,
          label: `IDCC ${formatIdcc(perfectMatch.num)}`,
          conventions: [perfectMatch]
        }
      ];
    }
    // when multiple results from ES, show multiple CCs
    if (matches && matches.length) {
      // show first 5 results
      return matches.slice(0, 5).map(match => ({
        type: "convention",
        id: match.idcc,
        label: `IDCC ${formatIdcc(match.num)}`,
        conventions: [match]
      }));
    }
  }
  return null;
};
