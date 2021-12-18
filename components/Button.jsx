import React from "react";
import styled from "styled-components";

const getBackgroundColor = (props) =>
  props.variant === "outlined" ? "" : props.theme.action.primary;

const getTextColor = (props) =>
  props.variant === "outlined"
    ? props.theme.typography.dark
    : props.theme.typography.light;

const StyledButton = styled.button`
  border-radius: 15px;
  padding: 5px 30px;
  border: 1px solid ${(props) => props.theme.action.primary};
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  font-weight: 600;
`;

const Button = ({ children, className, variant }) => {
  return (
    <StyledButton className={className} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
