import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import { theme, VerticalArrow, keyframes } from "@cdt/ui";
import { ElementBuilder } from "../index";

const { colors, spacing } = theme;
const { fadeIn } = keyframes;

class AccordionWrapper extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    headingLevel: PropTypes.number.isRequired
  };
  render() {
    const { data, headingLevel } = this.props;
    const firstIndexOfAccordionItem = data.$.findIndex(
      element => element.name === "Chapitre"
    );
    const accordionItems = data.$.filter(
      element => element.name === "Chapitre"
    ).map((accordionItem, index) => {
      const title = (
        <>
          <ElementBuilder
            data={accordionItem.$.find(child => child.name === "Titre")}
            headingLevel={headingLevel}
          />
          <VerticalArrow />
        </>
      );
      const body = (
        <ElementBuilder
          data={accordionItem.$.filter(child => child.name !== "Titre")}
          headingLevel={headingLevel + 1}
        />
      );
      return (
        <AccordionItem key={index}>
          <AccordionItemTitle>{title}</AccordionItemTitle>
          <AccordionItemBody>{body}</AccordionItemBody>
        </AccordionItem>
      );
    });

    const beforeAccordionElements = data.$.slice(
      0,
      firstIndexOfAccordionItem
    ).map((element, index) => (
      <ElementBuilder key={index} data={element} headingLevel={headingLevel} />
    ));

    const afterAccordionElements = data.$.slice(
      firstIndexOfAccordionItem + accordionItems.length
    ).map((element, index) => (
      <ElementBuilder key={index} data={element} headingLevel={headingLevel} />
    ));
    return (
      <>
        {beforeAccordionElements}
        <StyledAccordion accordion={false}>{accordionItems}</StyledAccordion>
        {afterAccordionElements}
      </>
    );
  }
}

export default AccordionWrapper;

const StyledAccordion = styled(Accordion)`
  margin-bottom: ${spacing.large};

  .accordion__item + .accordion__item {
    border-top: 1px solid ${colors.elementBorder};
  }

  .accordion__title {
    position: relative;
    padding-right: ${spacing.large};
    cursor: pointer;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: currentColor;
      font-weight: normal;
    }
  }

  .accordion__title:hover,
  .accordion__title:focus,
  .accordion__title:focus-within,
  .accordion__title[aria-expanded="true"] {
    color: ${colors.title};
  }

  .accordion__body {
    padding: ${spacing.base};
    animation: ${fadeIn} 0.35s ease-in;
  }

  .accordion__body--hidden {
    display: none;
  }
`;
