import React from "react";
import { render } from "@testing-library/react";
import FicheSP from "../fiche-service-public";

describe("<FicheSP />", () => {
  it("should render", () => {
    const { container } = render(<FicheSP />);
    expect(container).toMatchSnapshot();
  });
});
