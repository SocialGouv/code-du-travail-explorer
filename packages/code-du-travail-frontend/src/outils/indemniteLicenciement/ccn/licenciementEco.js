import React from "react";
import PropTypes from "prop-types";
import { Container, Section, Wrapper } from "@cdt/ui";
import { PrevNextStepper } from "../PrevNextStepper";
import { Label, RadioContainer } from "../stepStyles";

class LicenciementEco extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    nextDisabled: PropTypes.bool
  };
  static defaultProps = {
    value: false,
    nextDisabled: false
  };

  render() {
    const { onChange, value, onPrevious, onNext, nextDisabled } = this.props;

    return (
      <React.Fragment>
        <Section>
          <Container>
            <Wrapper variant="light">
              <h2>Le motif de votre licenciement est-il économique ?</h2>
              <RadioContainer>
                <Label>
                  <input
                    type="radio"
                    onChange={() => onChange(true)}
                    name="affiliation"
                    checked={value === true}
                  />{" "}
                  Oui
                </Label>
                <Label>
                  <input
                    type="radio"
                    onChange={() => onChange(false)}
                    name="affiliation"
                    checked={value === false}
                  />{" "}
                  Non
                </Label>
              </RadioContainer>
            </Wrapper>
          </Container>
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

export { LicenciementEco };
