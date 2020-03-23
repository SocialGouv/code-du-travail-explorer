import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";
import { theme } from "@socialgouv/react-ui";

import { SectionTitle, Input } from "../../../common/stepStyles";
import { InlineError } from "../../../common/ErrorField";
import { isNumber } from "../../../common/validators";

function CategoriePeriod() {
  return (
    <>
      <SectionTitle>
        Quelles sont les périodes éventuelles passées au statut de Technicien,
        Agent de maîtrise (TAM) ou Employé&nbsp;?
      </SectionTitle>
      <Field
        name="tamDuration"
        validate={isNumber}
        subscription={{
          value: true,
          error: true,
          touched: true,
          invalid: true,
        }}
      >
        {({ input, meta: { error, touched, invalid } }) => {
          return (
            <VerticalLabel>
              <p>Période passée en tant que TAM ou employé</p>
              <div>
                <Input
                  {...input}
                  min="0"
                  type="number"
                  invalid={touched && invalid}
                />{" "}
                mois
                {error && touched && (
                  <ErrorWrapper>
                    <InlineError>{error}</InlineError>
                  </ErrorWrapper>
                )}
              </div>
            </VerticalLabel>
          );
        }}
      </Field>
      <Field
        name="cadreDuration"
        validate={isNumber}
        subscription={{
          value: true,
          error: true,
          touched: true,
          invalid: true,
        }}
      >
        {({ input, meta: { error, touched, invalid } }) => {
          return (
            <VerticalLabel>
              <p>Période passée en tant que cadre</p>
              <div>
                <Input
                  {...input}
                  min="0"
                  type="number"
                  invalid={touched && invalid}
                />{" "}
                mois
                {error && touched && <InlineError>{error}</InlineError>}
              </div>
            </VerticalLabel>
          );
        }}
      </Field>
    </>
  );
}

export { CategoriePeriod };
const { spacings } = theme;
const VerticalLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
const ErrorWrapper = styled.div`
  display: inline-block;
  margin-left: ${spacings.medium};
`;
