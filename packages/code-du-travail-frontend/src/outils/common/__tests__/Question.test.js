/* eslint-disable no-irregular-whitespace */
import { render } from "@testing-library/react";
import React from "react";

import { Question } from "../Question";

describe("<Question />", () => {
  it("should render question", () => {
    const { container } = render(<Question>ma question</Question>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1.8rem;
        cursor: pointer;
      }

      @media (max-width:600px) {
        .c0 {
          font-size: 1.6rem;
        }
      }

      <div>
        <label
          class="c0"
        >
          ma question
        </label>
      </div>
    `);
  });
  it("should render mandatory question", () => {
    const { container } = render(
      <Question required>ma question obligatoire</Question>
    );
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        color: #3e486e;
        line-height: 1.25;
        font-size: 1.6rem;
        font-weight: 400;
      }

      .c0 {
        display: block;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1.8rem;
        cursor: pointer;
      }

      @media (max-width:600px) {
        .c0 {
          font-size: 1.6rem;
        }
      }

      <div>
        <label
          class="c0"
        >
          ma question obligatoire
          <span
            class="c1"
            font-size="default"
            font-weight="400"
          >
             (obligatoire)
          </span>
        </label>
      </div>
    `);
  });
});
