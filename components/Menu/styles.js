import styled, { css } from "styled-components";
import { FcMenu } from "react-icons/fc";
import { breakAt, breakUntil } from "../../constants/breakpoints";

export const HamburguerButton = styled(FcMenu)`
  cursor: pointer;
  z-index: 3;

  ${breakAt("md")} {
    display: none;
  }
`;

export const MenuWrapper = styled.ul`
  ${({ isOpen }) => (isOpen ? "display: flex" : "display: none")};
  background-color: var(--white-2);
  padding: 0.75rem;
  border-radius: 16px;
  flex-direction: column;
  gap: 0.6rem;
  position: absolute;
  right: 1.5rem;
  top: 50px;
  z-index: 2;
  animation: fade-in 0.1s ease-in;

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
    line-height: 1rem;
  }

  ${breakAt("md")} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    top: 0;
    right: 0;
    gap: 15%;
    background-color: transparent;
    flex: 1 1 100%;
    max-width: 600px;
  }
`;

const activeMobileStyle = css`
  border-bottom: 2px solid var(--secondary-4);
  font-weight: bold;
`;

const MenuItemBase = styled.li`
  font-size: 0.9rem;
  color: var(--primary-1);
  cursor: pointer;

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  ${breakUntil("md")} {
    & > span {
      ${({ isActive }) => isActive && activeMobileStyle};
    }
  }

  ${breakAt("md")} {
    font-size: 1.125rem;
  }
`;

export const MenuItemWrapper = styled(MenuItemBase)`
  ${breakAt("md")} {
    font-weight: bold;

    ${({ isActive }) => isActive && `color: var(--secondary-5)`};

    span {
      display: inline-block;
      transition: transform 0.1s ease-in-out;
    }

    :hover > span {
      transform: scale(1.1);
    }
  }
`;

export const SubmenuItemWrapper = styled(MenuItemBase)`
  ${breakAt("md")} {
    font-weight: normal;
    ${({ isActive }) => isActive && `font-weight: 700;`};

    span {
      position: relative;
      overflow: hidden;
      padding: 4px;
    }

    span::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0px;
      height: 2px;
      width: 100%;
      transform: translateX(-100%);
      background-color: var(--secondary-1);
      transition: transform 0.2s ease-in-out;
    }

    span:hover::after {
      transform: translateX(0);
    }
  }
`;

export const SubMenuWrapper = styled.div`
  ${breakAt("md")} {
    transform: translateY(20%);
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding-top: 8px;
    transition: visibility 0.2s ease-in-out, transform 0.2s ease-in-out,
      opacity 0.2s ease-in-out;

    ${MenuItemWrapper}:hover & {
      visibility: visible;
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 0.6rem;

  ${breakAt("md")} {
    background-color: var(--white-2);
    border-radius: 16px;
    padding: 1em;
  }
`;
