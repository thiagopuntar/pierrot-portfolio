import React from "react";
import styled from "styled-components";

const getBackgroundColor = (props) => {
  const bgs = {
    outlined: "inherit",
    primary: props.theme.colors.primary.zero1,
  };

  return bgs[props.variant] || bgs.primary;
};

const getTextColor = (props) => {
  const colors = {
    primary: props.theme.colors.secondary.zero1,
    outlined: props.theme.colors.primary.zero4,
  };

  return colors[props.variant] || colors.primary;
};

const getBorder = (props) => {
  const colors = {
    outlined: props.theme.colors.primary.zero4,
  };

  const color = colors[props.variant];
  if (!color) return 0;

  return `2px solid ${color}`;
};

const StyledButton = styled.button`
  border-radius: 20px;
  padding: 8px 0px;
  border: ${getBorder};
  background-color: ${getBackgroundColor};
  color: ${getTextColor};
  font-weight: 600;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
  }
`;

const Button = ({ children, className, variant, ...props }) => {
  return (
    <StyledButton className={className} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
