import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styled from "styled-components";

import { breakpoints, fonts, spacings } from "../theme";
import { useTOCReducer } from "./useTOCReducer";

const initialState = {
  titles: [],
};

export const TableOfContent = ({ ids, observerArea, threshold, ...props }) => {
  const { observerCallback, setTitles, titles } = useTOCReducer(initialState);

  useEffect(() => {
    const titles = [];

    ids.map((id) => {
      const titleElement = document.getElementById(id);
      if (titleElement) {
        titles.push({
          active: false,
          element: titleElement,
          id,
        });
      }
    });
    setTitles(titles);

    let observer = false;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(observerCallback, {
        rootMargin: `-${observerArea.top} 0px -${observerArea.bottom} 0px`,
        threshold,
      });
      titles.forEach((title) => {
        observer.observe(title.element);
      });
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [ids, observerArea, observerCallback, setTitles, threshold]);

  return (
    <div {...props}>
      {titles.map(({ active, element, id }) => (
        <TableItem active={active} key={`menu-${id}`} href={`#${element.id}`}>
          {element.getAttribute("data-short-title") || element.textContent}
        </TableItem>
      ))}
    </div>
  );
};

TableOfContent.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string),
  observerArea: PropTypes.shape({
    bottom: PropTypes.string,
    top: PropTypes.string,
  }),
  threshold: PropTypes.arrayOf(PropTypes.string),
};

TableOfContent.defaultProps = {
  ids: [],
  observerArea: { bottom: "70%", top: "0px" },
  threshold: ["1"],
};

const TableItem = styled.a`
  display: block;
  padding: ${spacings.tiny} 0;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  text-decoration: none;
  @media (max-width: ${breakpoints.tablet}) {
    font-weight: normal;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fonts.sizes.default};
  }
`;
