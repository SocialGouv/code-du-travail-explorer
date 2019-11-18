import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Alert, theme } from "@socialgouv/react-ui";

import { SectionTitle, Highlight } from "../../common/stepStyles";
import { Montant } from "./Montant";
import { FormulaDetails } from "./FormulaDetails";

function IndemniteCCn({
  children,
  indemniteConventionnelle,
  indemniteLegale,
  infoCalculLegal,
  infoCalculConventionnel,
  error
}) {
  const isIndemniteConventionnelleBigger =
    indemniteConventionnelle > indemniteLegale;

  return (
    <>
      <SectionTitle>Indemnité de licenciement</SectionTitle>
      {error ? (
        <Alert>{error}</Alert>
      ) : (
        <>
          <p>
            À partir des éléments que vous avez saisis, l’indemnité de
            licenciement est estimée à{" "}
            <Highlight>
              {Math.max(
                indemniteLegale,
                indemniteConventionnelle
              ).toLocaleString("fr-FR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              })}
              &nbsp;€ brut
            </Highlight>
          </p>
          <SectionTitle>Détails</SectionTitle>
          <p>
            Il s’agit du montant le plus important entre l’indemnité légale et
            l’indemnité conventionnelle.
          </p>
          <RowWrapper>
            <div>
              <RowTitle>Votre indemnite légale</RowTitle>
              <Montant
                value={indemniteLegale}
                ratio={
                  isIndemniteConventionnelleBigger
                    ? indemniteLegale / indemniteConventionnelle
                    : 1
                }
              />
              <FormulaDetails infoCalcul={infoCalculLegal} />
            </div>
            <div>
              <RowTitle>Votre indemnite conventionnelle</RowTitle>
              <Montant
                value={indemniteConventionnelle}
                ratio={
                  isIndemniteConventionnelleBigger
                    ? 1
                    : indemniteConventionnelle / indemniteLegale
                }
              />
              <FormulaDetails infoCalcul={infoCalculConventionnel} />
            </div>
          </RowWrapper>
          {children}
        </>
      )}
      <p>
        Un accord d’entreprise, le contrat de travail ou un usage peuvent
        prévoir un montant plus favorable pour le salarié. Dans ce cas, le
        montant dû est le montant le plus favorable pour le salarié.
      </p>
    </>
  );
}
IndemniteCCn.propTypes = {
  branche: PropTypes.string.isRequired,
  indemniteConventionnelle: PropTypes.number.isRequired,
  indemniteLegale: PropTypes.number.isRequired,
  error: PropTypes.string,
  infoCalculLegal: PropTypes.shape({
    formula: PropTypes.string.isRequired,
    labels: PropTypes.object.isRequired
  }).isRequired,
  infoCalculConventionnel: PropTypes.shape({
    formula: PropTypes.string.isRequired,
    labels: PropTypes.object.isRequired
  }).isRequired
};

export { IndemniteCCn };

const { fonts, spacings } = theme;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowTitle = styled.div`
  margin: ${spacings.tiny};
  font-weight: 700;
  font-size: ${fonts.sizes.default};
`;
