import React from "react";
import PropTypes from "prop-types";

import { Tabs } from "@socialgouv/react-ui";

import { ElementBuilder } from "./ElementBuilder";

class Tabulator extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    headingLevel: PropTypes.number.isRequired
  };
  render() {
    const { data, headingLevel: previousHeadingLevel } = this.props;
    const headingLevel =
      previousHeadingLevel > 0
        ? previousHeadingLevel + 1
        : previousHeadingLevel;

    const tabsData = data.children.map(tab => {
      const title = tab.children.find(el => el.name === "Titre");
      const content = tab.children.filter(el => el.name !== "Titre");
      return {
        tab: <ElementBuilder data={title} headingLevel={headingLevel} />,
        panel: <ElementBuilder data={content} headingLevel={headingLevel + 1} />
      };
    });
    return <Tabs data={tabsData} />;
  }
}

export default Tabulator;
