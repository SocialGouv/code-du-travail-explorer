import React, { useEffect } from "react";

import { TextQuestion } from "../../common/TextQuestion";
import { WizardStepProps } from "../../common/type/WizardType";
import { usePublicodes } from "../../publicodes";
import { transformInfoCcn } from "../../publicodes/TransformInfoCcn";

function Informations({ form }: WizardStepProps): JSX.Element {
  const publicodesContext = usePublicodes();

  // List of excluded rules to show in this step.
  // Pulicodes can return them as missing args, but there are populated by another steps.
  const excludedRules = [
    "contrat salarié - ancienneté",
    "contrat salarié - convention collective",
    "contrat salarié - mise à la retraite",
  ];
  useEffect(() => {
    publicodesContext.setSituation(transformInfoCcn(form.getState().values));
  }, [form]);

  return (
    <>
      <>
        {publicodesContext.situation
          .filter((item) => !excludedRules.includes(item.name))
          .map((item) => {
            return (
              <TextQuestion
                key={item.name}
                name={item.name}
                label={item.rawNode.question}
                validate={undefined}
                placeholder="0"
              />
            );
          })}
      </>
      <>
        {publicodesContext.missingArgs
          .filter((item) => !excludedRules.includes(item.name))
          .map((item) => {
            return (
              <TextQuestion
                key={item.name}
                name={item.name}
                label={item.rawNode.question}
                validate={() => true}
              />
            );
          })}
      </>
    </>
  );
}

export { Informations };
