import React from "react";
import PropTypes from "prop-types";
import { Container, Section } from "@cdt/ui";

import { Input } from "./stepStyles";
import { PrevNextStepper } from "./PrevNextStepper";

class Anciennete extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    nextDisabled: PropTypes.bool
  };

  static defaultProps = {
    value: 0,
    nextDisabled: false
  };

  render() {
    const { value, onChange, onNext, onPrevious, nextDisabled } = this.props;
    return (
      <React.Fragment>
        <Section light>
          <React.Fragment>
            <h2>Quelle est votre ancienneté en mois ?</h2>
            <div style={{ fontSize: "2em" }}>
              <Input
                size={5}
                type="number"
                onFocus={e => {
                  if (e.target.value === "0") {
                    e.target.value = "";
                  }
                }}
                onChange={e => onChange(parseFloat(e.target.value) || 0)}
                value={value}
              />{" "}
              mois
            </div>
          </React.Fragment>
        </Section>
        <Container>
          <PrevNextStepper
            onPrev={onPrevious}
            onNext={onNext}
            nextDisabled={nextDisabled}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export { Anciennete };
