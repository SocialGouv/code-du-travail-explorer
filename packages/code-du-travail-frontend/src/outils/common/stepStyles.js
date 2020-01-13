import styled from "styled-components";
import { theme } from "@socialgouv/react-ui";

const { breakpoints, fonts, colors, spacings } = theme;

export const Input = styled.input`
  width: ${props => (props.type === "number" ? "10em" : "auto")};
  text-align: ${props => (props.type === "number" ? "right" : "left")};
  border-color: ${props => (props.invalid ? colors.error : colors.border)};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 2em;
  padding: 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === "row" ? "row" : "column")};
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${spacings.medium};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin-top: ${spacings.large};
  margin-bottom: ${spacings.medium};
  color: ${({ theme }) => theme.altText};
  font-weight: 600;
  font-size: ${fonts.sizes.headings.small};
  font-family: "Open Sans", sans-serif;
`;

export const Highlight = styled.strong`
  color: ${colors.paragraph};
  font-weight: 700;
  font-size: ${fonts.sizes.headings.small};
  white-space: nowrap;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fonts.sizes.default};
  }
`;

export const SmallText = styled.span`
  color: ${colors.paragraph};
  font-style: italic;
`;

export const Summary = styled.summary`
  margin-bottom: ${spacings.base};
`;
