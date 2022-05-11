import React, { forwardRef } from "react";
import styled from "styled-components";
import { breakAt } from "../constants/breakpoints";

const getBackgroundColor = (props) => {
  const bgs = {
    outlined: "inherit",
    primary: props.theme.colors.primary.z1,
    secondary: props.theme.colors.secondary.z1,
  };

  return bgs[props.variant] || bgs.primary;
};

const getTextColor = (props) => {
  const colors = {
    primary: props.theme.colors.secondary.z1,
    outlined: props.theme.colors.primary.z4,
    secondary: props.theme.colors.primary.z1,
  };

  return colors[props.variant] || colors.primary;
};

const getBorder = (props) => {
  const colors = {
    outlined: props.theme.colors.primary.z4,
  };

  const color = colors[props.variant];
  if (!color) return 0;

  return `2px solid ${color}`;
};

const StyledButton = styled.button`
  border-radius: 24px;
  padding: 0.5rem 0;
  border: ${getBorder};
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  font-weight: 600;
  transition: 0.2s ease-out;
  line-height: 1.5rem;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(105%);
  }

  ${breakAt("md")} {
    font-size: 1.125rem;
    padding-inline: 0.5em;
  }
`;

const Button = ({ children, className, variant, ...props }, ref) => {
  return (
    <StyledButton ref={ref} className={className} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
