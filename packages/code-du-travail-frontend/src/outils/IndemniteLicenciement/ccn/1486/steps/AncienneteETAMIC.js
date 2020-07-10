import { Input, theme, Toast } from "@socialgouv/cdtn-react-ui";
import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";

import { CurrencyField } from "../../../../common/CurrencyField";
import { Error } from "../../../../common/ErrorField";
import { Label, SectionTitle } from "../../../../common/stepStyles";
import { isNumber } from "../../../../common/validators";
import { YesNoQuestion } from "../../../../common/YesNoQuestion";

export const CONTRAT_KEY = "brancheContrat";
export const HAS_CONTRAT_KEY = "hasBrancheContrat";

export const AncienneteETAMIC = ({ form }) => {
  const data = form.getState().values;
  const hasContrats = data[HAS_CONTRAT_KEY];

  return (
    <>
      <SectionTitle>Contrats antérieurs</SectionTitle>
      <p>
        Si le salarié a été auparavant employé par la même société et que la fin
        du / des contrat(s) n’est pas imputable à l’une des raisons
        suivantes&nbsp;:
      </p>
      <ul>
        <li>démission</li>
        <li>licenciement pour faute grave ou faute lourde</li>
      </ul>
      <p>
        alors{" "}
        <strong>
          la durée de ce(s) contrat(s) s’ajoute à votre ancienneté
        </strong>
        .
      </p>
      <StyledToast>
        Dans le cas de la démission, l’employeur peut accepter de prendre en
        compte la durée du contrat de travail correspondant pour l’appréciation
        de l’ancienneté.
      </StyledToast>
      <YesNoQuestion
        name={HAS_CONTRAT_KEY}
        label="Avez-vous un/des contrat(s) antérieur(s) à déclarer ?"
        onChange={(HAS_CONTRAT_KEY) => {
          HAS_CONTRAT_KEY
            ? form.change(CONTRAT_KEY, {
                considered: false,
                duration: "",
                indemnite: "0",
              })
            : form.change(CONTRAT_KEY, undefined);
        }}
      />
      {hasContrats && (
        <>
          <Field
            name={`${CONTRAT_KEY}.duration`}
            validate={isNumber}
            subscription={{
              error: true,
              invalid: true,
              touched: true,
              value: true,
            }}
            render={({ input, meta: { touched, error, invalid } }) => (
              <>
                <Label htmlFor="duration">
                  Durée des contrats de travail précédents (en mois)
                </Label>
                <Input
                  {...input}
                  id="duration"
                  type="number"
                  invalid={touched && invalid}
                />
                {error && touched && <Error>{error}</Error>}
              </>
            )}
          />
          <StyledToast>
            Il est important de préciser l’indemnité de licenciement
            éventuellement perçue lors d’un précédent licenciement dans la même
            entreprise. L’employeur actuel peut la déduire de l’indemnité de
            licenciement en train d’être calculée.
          </StyledToast>
          <CurrencyField
            name={`${CONTRAT_KEY}.indemnite`}
            label="Indemnité de licenciement précédemment perçue"
            required={false}
          />
          <YesNoQuestion
            name={`${CONTRAT_KEY}.considered`}
            label="Souhaitez vous déduire cette indemnité&nbsp;?"
            required={false}
          />
        </>
      )}
    </>
  );
};

const { spacings } = theme;

const StyledToast = styled(Toast)`
  margin-top: ${spacings.medium};
`;
