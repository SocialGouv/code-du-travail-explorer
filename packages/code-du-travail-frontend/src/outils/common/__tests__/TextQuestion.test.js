import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TextQuestion } from "../TextQuestion";
import { Form } from "react-final-form";

describe("<TextQuestion />", () => {
  it("should render", () => {
    const onSubmit = jest.fn();
    const { container, getByLabelText } = render(
      <Form
        onSubmit={onSubmit}
        render={() => (
          <>
            <TextQuestion name="test" label="lorem ipsum" />
          </>
        )}
      />
    );
    const input = getByLabelText(/lorem ipsum/);

    fireEvent.change(input, { target: { value: "hello" } });
    expect(container).toMatchSnapshot();
  });
  it("should render error", () => {
    const onSubmit = jest.fn();
    const { getByText, getByTestId } = render(
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextQuestion name="test" label="lorem ipsum" />
            <button data-testid="next">suivant</button>
          </form>
        )}
      />
    );
    const bt = getByTestId("next");
    bt.click();
    expect(getByText(/Vous devez répondre à cette question/i)).toBeDefined();
  });
});
