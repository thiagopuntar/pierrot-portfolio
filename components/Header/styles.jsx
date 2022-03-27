import styled from "styled-components";
import ResponsiveImage from "../ResponsiveImage";
import { FcMenu } from "react-icons/fc";
import Menu from "../Menu";

export const Wrapper = styled.header`
  padding: 1.5rem;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled(ResponsiveImage)`
  border-radius: 8px;
`;

export const HamburguerButton = styled(FcMenu)`
  cursor: pointer;
`;

export const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.theme.colors.white.z2};
  padding: 0.75rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 2;

  & * {
    background-color: inherit;
    font-size: 0.625rem;
    line-height: 1rem;
  }
`;

export const MenuFrame = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 1;
  background: transparent;
`;
