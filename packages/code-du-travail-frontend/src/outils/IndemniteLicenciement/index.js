import React from "react";
import PropTypes from "prop-types";
import { OnChange } from "react-final-form-listeners";
import { Container, Section } from "@socialgouv/react-ui";

import {
  stepPrime,
  stepSalaires,
  stepReducer,
  initialSteps
} from "./stepReducer";
import { Wizard } from "../common/Wizard";

function CalculateurIndemnite() {
  /**
   * The rules defined here allows to manage additionnal steps to the wizard
   */
  const Rules = ({ values, dispatch }) => (
    <>
      <OnChange key="rule-same-salaire" name="hasSameSalaire">
        {value =>
          value === false
            ? dispatch({
                type: "add_step",
                payload: { insertAfter: stepSalaires.name, step: stepPrime }
              })
            : dispatch({ type: "remove_step", payload: stepPrime.name })
        }
      </OnChange>
      <OnChange key="rule-branche" name="branche">
        {async value => {
          if (value) {
            const module = await import(`./ccn/${value}`);
            const steps = module.steps.filter(({ condition = () => true }) =>
              condition(values)
            );
            dispatch({ type: "add_branche", payload: steps });
          } else {
            dispatch({ type: "remove_branche" });
          }
        }}
      </OnChange>
    </>
  );

  return (
    <Section>
      <Container>
        <Wizard
          title="Simulateur d’indemnités de licenciement"
          stepReducer={stepReducer}
          initialSteps={initialSteps}
          Rules={Rules}
        />
      </Container>
    </Section>
  );
}

CalculateurIndemnite.propTypes = {
  initialState: PropTypes.object
};

export { CalculateurIndemnite };
