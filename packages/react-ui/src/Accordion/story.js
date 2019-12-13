import React from "react";
import PropTypes from "prop-types";
import { Section } from "../layout/Section";
import { Accordion } from ".";

export default {
  component: Accordion,
  title: "Components|Accordion"
};

const CustomTitle = ({ children }) => <strong>{children}</strong>;
CustomTitle.propTypes = {
  children: PropTypes.node
};

export const base = () => (
  <>
    <Section>
      <Accordion
        items={[
          {
            title:
              "This is the heading of a single item accordion with a crazy long title so we know if the accordion arrow icon get compressed or if it keeps its width",
            as: "h5",
            body: "this is the single body"
          }
        ]}
      />
    </Section>
    <Section>
      <Accordion
        items={[
          {
            title: "This the first heading of a multiple accordion",
            as: "h3",
            body: "this is the first body"
          },
          {
            title: "This is the second heading of a multiple accordion",
            body: "this is the second body"
          }
        ]}
      />
    </Section>
    <Section>
      <Accordion
        preExpanded={["id"]}
        items={[
          {
            id: "id",
            title: "This is a pre expanded accordion",
            as: "h2",
            body: "this is the body"
          },
          {
            title: "This bloc could be extended too if needed",
            as: "h2",
            body: "this is the body"
          }
        ]}
      />
    </Section>
    <h2> Using custom component as title</h2>
    <Section>
      <Accordion
        items={[
          {
            title: <CustomTitle>This is a jsx title</CustomTitle>,
            as: "h2",
            body: "this is the body"
          },
          {
            title: <em>Another jsx title</em>,
            as: "h2",
            body: "this is the body"
          }
        ]}
      />
    </Section>
  </>
);
