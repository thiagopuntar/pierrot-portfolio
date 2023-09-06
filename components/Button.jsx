import React, { forwardRef } from "react";
import styled from "styled-components";
import { breakAt } from "../constants/breakpoints";

const BaseButton = styled.button`
  border-radius: 16px;
  padding: 16px 24px;
  border: none;
  background-color: var(--bg-color);
  color: var(--text-color);
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
    padding-inline: 0.75em;
  }
`;

const OutlinedButton = styled(BaseButton)`
  border: 2px solid var(--text-color);
  background-color: transparent;
`;

const NormalButton = styled(BaseButton)``;

const colors = {
  primary: {
    "--text-color": "var(--primary-1)",
    "--bg-color": "var(--secondary-1)",
  },
  secondary: {
    "--text-color": "var(--secondary-1)",
    "--bg-color": "var(--primary-1)",
  },
  white: {
    "--text-color": "var(--white-2)",
    "--bg-color": "var(--white-2)",
  },
};

const variants = {
  normal: NormalButton,
  outlined: OutlinedButton,
};

const Button = ({ children, color, variant = "normal", ...props }, ref) => {
  const style = colors[color];
  if (!style) {
    throw new Error("Color not informed!");
  }

  const ButtonComponent = variants[variant];

  return (
    <ButtonComponent style={style} ref={ref} {...props}>
      {children}
    </ButtonComponent>
  );
};

export default forwardRef(Button);
