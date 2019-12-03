import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";
import { theme } from "@socialgouv/react-ui";

import { SectionTitle, Label } from "../../../common/stepStyles";

export const DISCIPLINAIRE = "disciplinaire";
export const NON_DISCIPLINAIRE = "non-disciplinaire";
export const ECONOMIQUE = "eco";

export const CADRE = "cadre";
export const NON_CADRE = "non-cadre";
export const NE_SAIT_PAS = "ne-sais-pas";

export const optionMotifs = {
  [DISCIPLINAIRE]: "Motif disciplinaire",
  [NON_DISCIPLINAIRE]: "Motif non disciplinaire",
  [ECONOMIQUE]: "Motif économique"
};

export const optionCategorie = {
  [NON_CADRE]: "Non cadre",
  [CADRE]: "Cadre",
  [NE_SAIT_PAS]: "Ne sait pas"
};

function Step() {
  return (
    <>
      <SectionTitle>Motif du licenciement</SectionTitle>
      <Field name="motif">
        {({ input }) => {
          return (
            <FormGroup>
              <Label htmlFor="input-motif">
                Quel est le motif du licenciement&nbsp;?
              </Label>
              <Select id="input-motif" {...input}>
                <option value="" disabled>
                  motifs...
                </option>
                {Object.entries(optionMotifs).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </FormGroup>
          );
        }}
      </Field>

      <Field name="categorie">
        {({ input }) => {
          return (
            <FormGroup>
              <Label htmlFor="input-categorie">
                Quelle est la catégorie professionnelle du salarié&nbsp;?
              </Label>

              <Select id="input-categorie" {...input}>
                <option value="" disabled>
                  catégories...
                </option>
                {Object.entries(optionCategorie).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </FormGroup>
          );
        }}
      </Field>
    </>
  );
}

export { Step };

const { spacings } = theme;
const Select = styled.select`
  max-width: 32rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${spacings.medium};
`;
