import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ServiceRenseignement } from "../ServiceRenseignement";

jest.mock(
  "../../data/services-de-renseignement.json",
  () => ({
    "26": {
      url: "link.url"
    }
  }),
  { virtual: true }
);

jest.mock("../../piwik", () => ({
  matopush: jest.fn()
}));

describe("<ServiceRenseignement />", () => {
  it("should render suggestions", async () => {
    const { container, getByLabelText } = render(<ServiceRenseignement />);
    const input = getByLabelText(/saisissez votre numéro de département/i);

    fireEvent.change(input, { target: { value: 26 } });

    expect(container).toMatchSnapshot();
  });
});
