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
  background-color: ${({ theme }) => theme.colors.white.z2};
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
    position: relative;
    justify-content: space-around;
    top: 0;
    right: 0;
    gap: 1.25em;
    background-color: transparent;
    flex: 1 1 100%;
    max-width: 600px;
  }
`;

const activeMobileStyle = css`
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.z4};
  font-weight: bold;
`;

const activeDesktopStyle = css`
  color: ${({ theme }) => theme.colors.secondary.z4};
  /* font-size: 1.25rem; */
`;

const contactStyle = css`
  border: 2px solid ${({ theme }) => theme.colors.primary.z1};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.primary.z1};
  padding: 0.5em 1em;
  margin-left: 1.5em;
`;

export const StyledLink = styled.li`
  & a {
    text-decoration: none;
    font-size: 0.8rem;

    ${breakUntil("md")} {
      ${({ isActive }) => isActive && activeMobileStyle};
    }

    ${breakAt("md")} {
      font-size: 1.125rem;
      font-weight: bold;

      ${({ isActive }) => isActive && activeDesktopStyle};
    }

    &:hover {
      ${activeDesktopStyle};
    }

    ${({ variant }) => variant === "contact" && contactStyle}
  }
`;

export const SubMenuWrapper = styled.ul`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ${breakAt("md")} {
    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white.z2};
    border-radius: 16px;
    padding: 1em;

    & a {
      font-size: 1rem;
      font-weight: normal;
    }

    ${({ isExpanded }) => isExpanded && "display: flex;"}
  }
`;
