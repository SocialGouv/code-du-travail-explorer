import React from "react";
import { fireEvent, render } from "react-testing-library";

import { DocumentSuggester } from "../DocumentSuggester";
const suggestions = [
  {
    _source: {
      source: "kali",
      title: "convention collective title"
    },
    hightlight: {
      "all_text.french_exact": <mark>hightlighted ccn</mark>
    }
  },
  {
    _source: {
      source: "faq",
      title: "question / réponse title"
    },
    hightlight: {
      "all_text.french_exact": <mark>hightlighted faq</mark>
    }
  }
];

function renderDocumentSuggester({
  onSearch = jest.fn(),
  onSelect = jest.fn(),
  onClear = jest.fn(),
  onChange = jest.fn(),
  query = "foo bar search",
  placeholder = "document suggester placeholder",
  suggestions = []
}) {
  return render(
    <DocumentSuggester
      onChange={onChange}
      onSearch={onSearch}
      onClear={onClear}
      onSelect={onSelect}
      query={query}
      placeholder={placeholder}
      suggestions={suggestions}
    />
  );
}

describe("<DocumentSuggester />", () => {
  it("should render", () => {
    const { container } = renderDocumentSuggester({});
    expect(container).toMatchSnapshot();
  });

  it("should render suggestions", () => {
    const { container, getByPlaceholderText } = renderDocumentSuggester({
      placeholder: "search foo",
      suggestions
    });
    const input = getByPlaceholderText(/search foo/i);
    input.focus();
    expect(container).toMatchSnapshot();
  });

  it("should call onChange when input change", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = renderDocumentSuggester({
      placeholder: "search foo",
      onChange
    });

    const input = getByPlaceholderText(/search foo/i);
    const mockEvent = { target: { value: "test" } };
    fireEvent.change(input, mockEvent);
    expect(onChange).toBeCalled();
  });
  it("should call onSearch after input has changed", () => {
    const onSearch = jest.fn();

    const { getByPlaceholderText } = renderDocumentSuggester({
      placeholder: "search foo",
      onSearch
    });

    const input = getByPlaceholderText(/search foo/i);
    const mockEvent = { target: { value: "test" } };
    fireEvent.change(input, mockEvent);
    expect(onSearch).toBeCalledWith(expect.objectContaining({ value: "test" }));
  });

  it("should call onSelect when user clicks some option", () => {
    const onSelect = jest.fn();
    const { getByRole, getByPlaceholderText } = renderDocumentSuggester({
      placeholder: "the place to be",
      suggestions,
      onSelect
    });
    const input = getByPlaceholderText(/the place to be/i);
    input.focus();
    const option = getByRole("option");
    option.click();
    expect(onSelect).toHaveBeenCalledWith(suggestions[0], expect.anything());
  });
});
