/**
 * calcul de l'indemnite de licenciement légale
 */

import { isAfter } from "date-fns";
const sum = arr => arr.reduce((sum, c) => sum + parseFloat(c), 0);
const round = fl => parseInt(fl * 100, 10) / 100;

function getSalaireRef({
  hasTempsPartiel = false,
  hasSameSalaire = false,
  salaires = [],
  salaire,
  salairesPeriods,
  primes = [],
  anciennete
}) {
  const primeValues = primes.map(a => a.prime);
  const salaryValues = salaires.map(a => a.salary);

  let moyenneSalaires = 0;
  let moyenne3DerniersMoisSalaires = 0;

  // calcul du salaire de reference
  if (hasTempsPartiel) {
    return salairesPeriods.reduce(
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
function getIndemnite({
  salaireRef,
  inaptitude = false,
  anciennete,
  dateNotification
}) {
  let formula;

  const avant27Sep2017 = isAfter(new Date("2017-09-27"), dateNotification);

  let indemnite = 0;
  const isSmallAnciennete = anciennete <= 10; // 10 years
  if (avant27Sep2017 && anciennete >= 1) {
    if (isSmallAnciennete) {
      indemnite = (1 / 5) * salaireRef * anciennete;
      formula = `(1/5 * ${round(salaireRef)} * ${anciennete}) / 12`;
    } else {
      indemnite =
        (1 / 5) * salaireRef * anciennete +
        (2 / 15) * salaireRef * (anciennete - 10);
      formula = `(1/5  * ${round(salaireRef)} * 10) + (2/5 * ${round(
        salaireRef
      )} * (${round(anciennete / 12)} - 10))`;
    }
  } else if (!avant27Sep2017 && anciennete >= 8 / 12) {
    if (isSmallAnciennete) {
      indemnite = (1 / 4) * salaireRef * anciennete;
      formula = `(1/4 * ${round(salaireRef)} * ${anciennete}) / 12`;
    } else {
      indemnite =
        (1 / 4) * salaireRef * 10 + (1 / 3) * salaireRef * (anciennete - 10);
      formula = `(1/4 * ${round(salaireRef)} * 10) + (1/3 * ${round(
        salaireRef
      )} * (${round(anciennete)} - 10))`;
    }
  }
  if (inaptitude && indemnite > 0) {
    indemnite *= 2;
    formula += "* 2";
  }

  return {
    indemnite: round(indemnite),
    formula
  };
}

export { getIndemnite, getSalaireRef, round };
