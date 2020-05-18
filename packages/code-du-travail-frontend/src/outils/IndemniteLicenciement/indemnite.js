import { isAfter } from "date-fns";

import { parse } from "../common/date";
import { round, sum } from "../common/math";
/**
 * Compute the salaire de Réference
 * used in the indemnité calculus
 */
function getSalaireRef({
  hasTempsPartiel = false,
  hasSameSalaire = false,
  salaires = [],
  salaire,
  salairePeriods,
  primes = [],
  anciennete,
}) {
  const primeValues = primes.map((a) => a.prime);
  const salaryValues = salaires.map((a) => a.salary);

  let moyenneSalaires = 0;
  let moyenne3DerniersMoisSalaires = 0;

  // calcul du salaire de reference
  if (hasTempsPartiel) {
    return salairePeriods.reduce(
      (salaire, period) =>
        salaire +
        (parseInt(period.salary, 10) * parseInt(period.duration, 10)) /
          12 /
          anciennete,
      0
    );
  } else {
    moyenneSalaires = hasSameSalaire
      ? salaire
      : sum(salaryValues) / salaires.length;

    moyenne3DerniersMoisSalaires = hasSameSalaire
      ? salaire
      : (sum(salaryValues.slice(0, 3)) -
          sum(primeValues) +
          sum(primeValues) / 12) /
        3;
    return Math.max(moyenneSalaires, moyenne3DerniersMoisSalaires);
  }
}

/**
 * Compute the indemnité calculus
 */
function getIndemnite({
  salaireRef,
  inaptitude = false,
  anciennete,
  dateNotification,
}) {
  const dNotification = parse(dateNotification);
  let formula = "-";
  const labels = {
    "Salaire de réference (Sref)": round(salaireRef),
    "Licenciement pour inaptitude": inaptitude ? "oui" : "non",
    "Ancienneté totale (A)": round(anciennete),
    ...(anciennete - 10 > 0 && {
      "Ancienneté au delà de 10ans (A2)": round(anciennete - 10),
    }),
  };
  const avant27Sep2017 = isAfter(new Date("2017-09-27"), dNotification);

  let indemniteLegale = 0;
  const isSmallAnciennete = anciennete <= 10; // 10 years
  if (avant27Sep2017 && anciennete >= 1) {
    if (isSmallAnciennete) {
      indemniteLegale = (1 / 5) * salaireRef * anciennete;
      formula = `\\frac15 \\times Sref \\times A`;
    } else {
      indemniteLegale =
        (1 / 5) * salaireRef * anciennete +
        (2 / 15) * salaireRef * (anciennete - 10);
      formula = `(\\frac15  \\times Sref \\times 10) + (\\frac25 \\times Sref \\times "A2")`;
    }
  } else if (!avant27Sep2017 && anciennete >= 8 / 12) {
    if (isSmallAnciennete) {
      indemniteLegale = (1 / 4) * salaireRef * anciennete;
      formula = `\\frac14 \\times Sref \\times A`;
    } else {
      indemniteLegale =
        (1 / 4) * salaireRef * 10 + (1 / 3) * salaireRef * (anciennete - 10);
      formula = `(\\frac14 \\times Sref \\times 10) + (\\frac13 \\times Sref \\Times "A2")`;
    }
  }
  if (inaptitude && indemniteLegale > 0) {
    indemniteLegale *= 2;
    formula += " \\times 2";
  }

  return {
    indemniteLegale: round(indemniteLegale),
    infoCalculLegal: { formula, labels },
  };
}

function getIndemniteFromFinalForm(form) {
  const state = form.getState();
  const {
    hasTempsPartiel = false,
    hasSameSalaire = false,
    inaptitude = false,
    salairePeriods = [],
    salaires = [],
    primes = [],
    salaire,
    anciennete,
    dateNotification,
  } = state.values;

  const salaireRef = getSalaireRef({
    hasTempsPartiel,
    hasSameSalaire,
    salaire,
    salairePeriods,
    salaires,
    anciennete,
    primes,
  });

  const { indemniteLegale, infoCalculLegal } = getIndemnite({
    salaireRef,
    inaptitude,
    anciennete,
    dateNotification,
  });

  return {
    salaireRefLegal: salaireRef,
    indemniteLegale,
    infoCalculLegal,
  };
}

export { getIndemnite, getSalaireRef, getIndemniteFromFinalForm, round };
