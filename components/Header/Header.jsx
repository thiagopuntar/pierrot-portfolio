import React from "react";
import logo from "../../public/img/Logo.png";
import Link from "next/link";
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
        <Link href="/" passHref>
          <LogoWrapper>
            <StyledLogo src={logo} alt="Logo" layout="fill" objectFit="cover" />
          </LogoWrapper>
        </Link>
        <Menu />
      </NavBar>
      <ShadowBlur />
      <ShadowBlurMiddle />
    </Wrapper>
  );
};

export default Header;
