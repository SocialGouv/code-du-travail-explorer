import React from "react";

import { Rule, RuleType } from "../publicodes";
import { SelectQuestion } from "./SelectQuestion";
import { TextQuestion } from "./TextQuestion";

interface Props {
  name: string;
  rule: Rule;
  onChange?: () => void;
}

const PubliQuestion: React.FC<Props> = ({ name, rule, onChange }) => {
  switch (rule?.cdtn?.type) {
    case RuleType.Liste:
      return (
        <SelectQuestion
          name={name}
          label={rule.question}
          subLabel={rule.description}
          options={reverseValues(rule.cdtn.valeurs)}
          onChange={onChange}
        />
      );
    default:
      return (
        <TextQuestion name={name} label={rule.question} validate={undefined} />
      );
  }
};

const reverseValues = (
  values: Record<string, string>
): Record<string, string> =>
  Object.entries(values).reduce((state, [key, value]) => {
    state[value] = key;
    return state;
  }, {});

export default PubliQuestion;