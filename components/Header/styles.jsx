import styled from "styled-components";
import ResponsiveImage from "../ResponsiveImage";
import { breakAt } from "../../constants/breakpoints";

export const Wrapper = styled.header`
  padding: 1.5rem;
  position: relative;
  overflow-x: clip;

  ${breakAt("md")} {
    padding: 1.5rem 10%;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(ResponsiveImage)`
  border-radius: 8px;
`;

export const LogoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 32px;

  ${breakAt("md")} {
    width: 50px;
    height: 50px;
  }
`;

export const ShadowBlur = styled.div`
  ${breakAt("md")} {
    position: absolute;
    height: 572px;
    width: 572px;
    border-radius: 50%;
    background-color: rgba(83, 38, 128, 0.25);
    opacity: 0.6;
    filter: blur(150px);
    right: 0;
    top: -88px;
  }
`;

export const ShadowBlurMiddle = styled.div`
  display: none;

  ${breakAt("md")} {
    position: absolute;
    display: block;
    border-radius: 50%;
    height: 562px;
    width: 562px;
    background-color: #fff8b3;
    filter: blur(150px);
    opacity: 0.6;
    left: -153px;
    top: 700px;
    z-index: 0;
  }
`;
