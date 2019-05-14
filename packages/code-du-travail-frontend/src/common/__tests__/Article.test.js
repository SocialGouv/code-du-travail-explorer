import React from "react";
import { render } from "react-testing-library";
import Article from "../Article";

const articleProps = {
  title:
    "Contrat de travail et formalités d'embauche de l'assistante maternelle",
  sourceType: "Fiche service public",
  date: "26/07/2018"
};

describe("<Article />", () => {
  test("should render", () => {
    const { container } = render(
      <Article {...articleProps}>this is an Article</Article>
    );
    expect(container).toMatchSnapshot();
  });
});
