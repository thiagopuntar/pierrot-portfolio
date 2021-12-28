import React from "react";
import styled from "styled-components";

const getBackgroundColor = (props) => {
  const bgs = {
    outlined: "inherit",
    primary: props.theme.colors.primary.default,
    secondary: props.theme.colors.secondary.default,
    outlinedSecondary: props.theme.colors.primary.default,
  };

  return bgs[props.variant] || bgs.primary;
};

const getTextColor = (props) => {
  const colors = {
    outlined: props.theme.colors.typography.dark,
    primary: props.theme.colors.typography.button,
    secondary: props.theme.colors.typography.dark,
    outlinedSecondary: props.theme.colors.typography.button,
  };

  return colors[props.variant] || colors.primary;
};

const getBorderColor = (props) => {
  const colors = {
    outlinedSecondary: props.theme.colors.secondary.default,
  };

  return colors[props.variant] || props.theme.colors.primary.default;
};

const StyledButton = styled.button`
  border-radius: 15px;
  padding: 5px 30px;
  border: 1px solid ${getBorderColor};
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  font-weight: 600;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
  }
`;

const Button = ({ children, className, variant }) => {
  return (
    <StyledButton className={className} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
