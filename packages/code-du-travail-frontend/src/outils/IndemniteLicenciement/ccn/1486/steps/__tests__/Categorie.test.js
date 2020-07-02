import { render } from "@testing-library/react";
import React from "react";
import { Form } from "react-final-form";

import { Categorie } from "../Categorie";

describe("<Categorie />", () => {
  it("renders", () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <Form onSubmit={onSubmit}>{({ form }) => <Categorie form={form} />}</Form>
    );
    expect(container).toMatchSnapshot();
  });
});
