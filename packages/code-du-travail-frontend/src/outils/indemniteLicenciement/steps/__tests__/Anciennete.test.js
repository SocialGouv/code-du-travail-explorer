import React from "react";
import { render, fireEvent } from "react-testing-library";
import { StepAnciennete } from "../Anciennete";
import { Form } from "react-final-form";

function renderForm(data) {
  return render(
    <Form
      validate={StepAnciennete.validate}
      initialValues={{ ...data }}
      onSubmit={jest.fn()}
    >
      {({ form }) => <StepAnciennete form={form} />}
    </Form>
  );
}

describe("<Anciennete />", () => {
  it("should render", () => {
    const { container } = renderForm({});
    expect(container).toMatchSnapshot();
  });

  it("should display error if dateEntre > dateSortie", () => {
    const { container, getByLabelText } = renderForm({
      dateEntree: "2018-04-02",
      dateSortie: "2018-04-01"
    });
    const dateSortie = getByLabelText(/date de sortie/i);
    //trigger validation
    fireEvent.blur(dateSortie);
    expect(container.querySelector(".alert")).toMatchSnapshot();
  });

  it("should display error if dateNotif > dateSortie", () => {
    const { container, getByLabelText } = renderForm({
      dateNotification: "2018-05-02",
      dateSortie: "2018-04-01"
    });
    const dateNotif = getByLabelText(/licenciement/i);
    //trigger validation
    fireEvent.blur(dateNotif);
    expect(container.querySelector(".alert")).toMatchSnapshot();
  });

  it("should display error if anciennté < 8mois", () => {
    const { container, getByLabelText } = renderForm({
      dateEntree: "2018-04-02",
      dateNotification: "2018-09-02",
      dateSortie: "2018-12-31"
    });
    const dateSortie = getByLabelText(/date de sortie/i);
    //trigger validation
    fireEvent.blur(dateSortie);
    expect(container.querySelector(".alert")).toMatchSnapshot();
  });
  it("should display error if anciennté < 12mois and licenciement in 2017", () => {
    const { container, getByLabelText } = renderForm({
      dateEntree: "2017-04-02",
      dateNotification: "2017-09-02",
      dateSortie: "2018-12-31"
    });
    const dateSortie = getByLabelText(/date de sortie/i);
    //trigger validation
    fireEvent.blur(dateSortie);
    expect(container.querySelector(".alert")).toMatchSnapshot();
  });
});
