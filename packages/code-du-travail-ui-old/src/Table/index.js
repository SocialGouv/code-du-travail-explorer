import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import OverflowWrapper from "../OverflowWrapper";
import { box, colors, spacing } from "../theme";

const Table = ({ children, ...props }) => (
  <OverflowWrapper>
    <StyledTable {...props}>{children}</StyledTable>
  </OverflowWrapper>
);

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;

const StyledTable = styled.table`
  text-align: left;
  empty-cells: show;
  background-color: ${colors.white};
  border-collapse: collapse;
  border-spacing: 0;
  border: ${box.border};

  caption {
    padding: ${spacing.small} 0;
    text-align: center;
    font-style: italic;
  }

  ${props =>
    props.stripes &&
    css`
      tr:nth-child(even) {
        background-color: ${colors.lightBackground}};
      }
    `}

  td,
  th {
    padding: ${spacing.small} ${spacing.base};
    border: ${box.border};
  }

  th {
    background: ${colors.darkBackgorund};
  }

  thead,
  tfoot {
    padding: ${spacing.small} ${spacing.base};
    vertical-align: bottom;
    background: ${colors.lightBackground};
  }

  tfoot {
    vertical-align: top;
  }
`;
