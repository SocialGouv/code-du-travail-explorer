import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Form } from "react-final-form";

import { StepInfo } from "../Info";

function renderForm(data) {
  return render(
    <Form
      validate={StepInfo.validate}
      initialValues={{ ...data }}
      onSubmit={jest.fn()}
    >
      {({ form, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <StepInfo form={form} />
          <button data-testid="nextBt">suivant</button>
        </form>
      )}
    </Form>
  );
}

describe("<StepInfo />", () => {
  it("should render", () => {
    const { container } = renderForm({});
    expect(container).toMatchSnapshot();
  });

  it("should display error if contrat cdd", () => {
    const { getByLabelText, getByTestId, getByText } = renderForm({
      contrat: "cdi",
    });
    //trigger validation
    const cdd = getByLabelText(/cdd/i);
    fireEvent.click(cdd);
    const nextBt = getByTestId("nextBt");
    nextBt.click();
    expect(getByText(/pour les CDD/i)).toMatchSnapshot();
  });

  it("should display error if fauteGrave", () => {
    const { getAllByLabelText, getByTestId, getByText } = renderForm({});
    const [fauteGrave] = getAllByLabelText(/oui/i);
    fireEvent.click(fauteGrave);
    const nextBt = getByTestId("nextBt");
    nextBt.click();
    expect(getByText(/pas dûe en cas de faute grave/i)).toMatchSnapshot();
  });
});
