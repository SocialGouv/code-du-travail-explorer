import { Toast } from "@socialgouv/cdtn-ui";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import { Field } from "react-final-form";
import { Button, theme } from "@socialgouv/cdtn-ui";
import styled from "styled-components";

import { branches } from "../branches";
import { Label, SectionTitle } from "../../common/stepStyles";
import { getIndemniteFromFinalForm } from "../indemnite";
import { IndemniteLegale } from "../components/IndemniteLegale";

function StepIndemnite({ form }) {
  const { indemniteLegale, infoCalculLegal } = getIndemniteFromFinalForm(form);
  return (
    <>
      <IndemniteLegale
        indemnite={indemniteLegale}
        infoCalcul={infoCalculLegal}
      />

      <SectionTitle>
        La convention collective peut prévoir un montant plus important
      </SectionTitle>
      <p>
        Selon la convention collective applicable, le montant minimum de
        l’indemnité de licenciement peut être supérieur au montant de
        l’indemnité légale.
      </p>
      <Field
        name="branche"
        subscription={{ value: true, error: true, dirty: true }}
      >
        {({ input, meta: { error, dirty } }) => {
          return (
            <>
              <SelectWrapper>
                <Label htmlFor="ccn">
                  Sélectionnez la convention collective pour en savoir plus :
                </Label>
                <Select {...input} id="ccn">
                  <option disabled value="">
                    Sélectionner
                  </option>
                  {branches.map((branche) => (
                    <option value={branche.value} key={branche.value}>
                      {branche.label}
                    </option>
                  ))}
                </Select>
                {input.value && input.value.length > 0 && (
                  <CancelButton
                    variant="link"
                    onClick={() => input.onChange("")}
                  >
                    annuler
                  </CancelButton>
                )}
              </SelectWrapper>
              {error && dirty && <span>{error}</span>}
            </>
          );
        }}
      </Field>
    </>
  );
}
StepIndemnite.propTypes = {
  form: PropTypes.object.isRequired,
};
export { StepIndemnite };

const { spacings } = theme;

const SelectWrapper = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100%;
`;

const Select = styled.select`
  flex: 1 1 auto;
  width: 100%;
  margin-right: ${spacings.medium};
`;
const CancelButton = styled(Button)`
  margin: ${spacings.medium} 0;
`;
