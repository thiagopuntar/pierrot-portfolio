import React from "react";
import logo from "../../public/img/Logo.png";
import {
  StyledLogo,
  NavBar,
  Wrapper,
  ShadowBlur,
  LogoWrapper,
  ShadowBlurMiddle,
} from "./styles.jsx";
import Menu from "../Menu";

const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        <LogoWrapper>
          <StyledLogo src={logo} alt="Logo" layout="fill" objectFit="cover" />
        </LogoWrapper>
        <Menu />
      </NavBar>
      <ShadowBlur />
      <ShadowBlurMiddle />
    </Wrapper>
  );
};

export default Header;
