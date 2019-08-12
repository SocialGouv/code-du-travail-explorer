import React from "react";
import { render } from "react-testing-library";
import Texte from "../Convention/Texte";
import { containerAndTexteDeBase } from "./sampleData";

describe("<Texte />", () => {
  it("renders without a title", () => {
    const { container } = render(
      <Texte data={containerAndTexteDeBase.texteDeBase} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with a title", () => {
    const { container } = render(
      <Texte
        data={containerAndTexteDeBase.texteDeBase}
        title="This title must be in snapshot"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
