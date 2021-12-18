import React from "react";
import styled from "styled-components";

const getBackgroundColor = (props) => {
  const bgs = {
    outlined: "",
    primary: props.theme.action.primary,
    secondary: props.theme.action.secondary,
  };

  return bgs[props.variant] || bgs.primary;
};

const getTextColor = (props) => {
  const colors = {
    outlined: props.theme.typography.dark,
    primary: props.theme.typography.light,
    secondary: props.theme.action.primary,
  };

  return colors[props.variant] || colors.primary;
};

const StyledButton = styled.button`
  border-radius: 15px;
  padding: 5px 30px;
  border: 1px solid ${(props) => props.theme.action.primary};
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
