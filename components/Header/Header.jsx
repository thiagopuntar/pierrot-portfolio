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
import MenuHeader from "../Menu/MenuHeader";

const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        <LogoWrapper>
          <StyledLogo src={logo} alt="Logo" layout="fill" objectFit="cover" />
        </LogoWrapper>
        <MenuHeader />
      </NavBar>
      <ShadowBlur />
      <ShadowBlurMiddle />
    </Wrapper>
  );
};

export default Header;
