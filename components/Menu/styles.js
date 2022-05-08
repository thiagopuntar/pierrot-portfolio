import styled from "styled-components";
import { FcMenu } from "react-icons/fc";
import { breakAt } from "../../constants/breakpoints";

export const Wrapper = styled.div``;

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

export const MenuWrapper = styled.ul`
  ${({ isOpen }) => (isOpen ? "display: flex" : "display: none")};
  background-color: ${(props) => props.theme.colors.white.z2};
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
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

// export const StyledMdMenu = styled(Menu)`
//   display: none;
//   gap: 4rem;
//   font-weight: bold;
//   z-index: 1;
//   background-color: transparent;
//   align-items: center;

//   ${breakAt("md")} {
//     display: flex;
//   }
// `;

export const StyledLink = styled.li`
  & a {
    text-decoration: none;

    ${({ isActive, theme }) =>
      isActive &&
      `
      border-bottom: 2px solid ${theme.colors.secondary.z4};
      font-weight: bold;
      `};
  }
`;

export const SubMenuWrapper = styled.ul`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
