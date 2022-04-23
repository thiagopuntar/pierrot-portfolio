import styled from "styled-components";
import { FcMenu } from "react-icons/fc";
import Menu from "./Menu";
import { breakAt } from "../../constants/breakpoints";

export const HamburguerButton = styled(FcMenu)`
  cursor: pointer;
  z-index: 3;
  animation: fade-in 0.3s ease-in;

  ${breakAt("md")} {
    display: none;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.theme.colors.white.z2};
  padding: 0.75rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 2;
  animation: fade-in 0.3s ease-in;

  ${breakAt("md")} {
    display: none;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & * {
    background-color: inherit;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

export const StyledMdMenu = styled(Menu)`
  display: none;
  gap: 4rem;
  font-weight: bold;
  z-index: 1;
  background-color: transparent;
  align-items: center;

  ${breakAt("md")} {
    display: flex;
  }
`;

export const MenuFrame = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  background: transparent;
  ${breakAt("md")} {
    display: none;
  }
`;
