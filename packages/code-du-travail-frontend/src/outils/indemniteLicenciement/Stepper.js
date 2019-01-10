import React from "react";
import PropTypes from "prop-types";

class Stepper extends React.Component {
  static propTypes = {
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        component: PropTypes.function,
        key: PropTypes.string
      })
    ).isRequired,
    containerRef: PropTypes.object,
    render: PropTypes.func.isRequired,
    renderRestart: PropTypes.func,
    initialStep: PropTypes.number
  };
  static defaultProps = {
    initialStep: 0,
    renderRestart: null,
    containerRef: null
  };

  state = {
    step: this.props.initialStep
  };

  goPrevious = () => {
    this.setState(
      state => ({
        step: Math.max(0, state.step - 1)
      }),
      this.scrollToTop
    );
  };

  goNext = () => {
    this.setState(
      state => ({
        step: Math.min(this.props.steps.length, state.step + 1)
      }),
      this.scrollToTop
    );
  };

  scrollToTop = () => {
    const containerRef = this.props;
    if (containerRef) {
      document.body.scrollIntoView(containerRef.current);
    }
  };
  restart = () => {
    this.setState({ step: 0 });
  };

  render() {
    const { step } = this.state;
    if (step < this.props.steps.length) {
      const { key, component } = this.props.steps[step];
      return this.props.render({
        key,
        Component: component,
        onPrevious: step > 0 ? this.goPrevious : null,
        onNext: step < this.props.steps.length ? this.goNext : null
      });
    } else if (this.props.renderRestart) {
      return this.props.renderRestart({ restart: this.restart });
    } else {
      return null;
    }
  }
}

export { Stepper };
