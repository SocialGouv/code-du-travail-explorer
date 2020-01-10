import React from "react";
import { render } from "@testing-library/react";
import TYPE_REFERENCE from "../typeReference";
import ReferencesJuridiques from "../index";

const references = [
  {
    title: "Article L1244-3 du code du travail",
    type: TYPE_REFERENCE.codeDuTravail,
    id: "l1244-3"
  },
  {
    title: "Article L1244-4 du code du travail",
    type: TYPE_REFERENCE.codeDuTravail,
    id: "r*1244-4"
  },
  {
    title: "Article L3121-44 du JO",
    type: TYPE_REFERENCE.journalOfficiel,
    id: "l3121-44"
  },
  // the two below are not linked to any bloc
  {
    title: "Article xxx du JPO",
    type: TYPE_REFERENCE.journalOfficiel,
    id: "xxx"
  },
  {
    title: "Article yyy de la CC",
    type: TYPE_REFERENCE.conventionCollective,
    id: "yyy",
    slug: "ma-convention"
  }
];

describe("<ReferencesJuridiques />", () => {
  it("should render", () => {
    const { container } = render(
      <ReferencesJuridiques references={references} />
    );
    expect(container).toMatchSnapshot();
  });
});
