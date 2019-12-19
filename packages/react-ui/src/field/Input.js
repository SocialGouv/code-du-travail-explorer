import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { box, breakpoints, fonts, spacings } from "../theme";

export const Input = ({ name, icon: Icon, ...props }) => {
  return (
    <StyledWrapper>
      <StyledInput name={name} hasIcon={Boolean(Icon)} {...props} />
      {Icon && (
        <StyledIcon>
          <Icon />
        </StyledIcon>
      )}
    </StyledWrapper>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([() => null, PropTypes.node])
};

Input.defaultProps = {
  icon: null
};

const INPUT_HEIGHT = "5.4rem";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${INPUT_HEIGHT};
  padding: 0 ${spacings.medium};
  padding-right: ${props => (props.hasIcon ? "5rem" : spacings.medium)};
  color: ${({ theme }) => theme.paragraph};
  font-weight: normal;
  font-size: ${fonts.sizes.default};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  line-height: inherit;
  text-align: ${props => (props.type === "number" ? "right" : "left")};
  background: ${({ theme }) => theme.white};
  border: 1px solid transparent;
  border-color: ${({ invalid, theme }) =>
    invalid ? theme.error : "transparent"};
  border-radius: ${box.borderRadius};
  box-shadow: ${({ theme }) => box.shadow.large(theme.secondary)};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
  &:invalid {
    border-color: ${({ theme }) => theme.error};
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
  &:focus {
    border-color: ${({ theme }) => theme.secondary};
  }
  &:focus::placeholder {
    color: transparent;
  }
  appearance: none;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${spacings.small};
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: ${spacings.small};
  width: 100%;
  max-width: ${spacings.large};
  height: 100%;
  max-height: ${spacings.large};
  color: ${({ theme }) => theme.placeholder};
`;
