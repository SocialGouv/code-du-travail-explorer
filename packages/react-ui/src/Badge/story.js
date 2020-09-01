import React from "react";

import { Check } from "../icons";
import { Section } from "../layout/Section";
import { Wrapper } from "../layout/Wrapper";
import { Badge } from ".";

export default {
  component: Badge,
  title: "Components/Badge",
};

export const base = () => (
  <>
    <Section>
      <Wrapper
        style={{ height: "20rem", position: "relative", width: "30rem" }}
        variant="light"
      >
        <Badge />
      </Wrapper>
    </Section>
    <Section>
      <Wrapper
        variant="light"
        style={{ height: "20rem", position: "relative", width: "30rem" }}
      >
        <Badge icon={Check} variant="secondary" />
        <p>Configured badge (variant secondary with an other icon)</p>
      </Wrapper>
    </Section>
  </>
);
