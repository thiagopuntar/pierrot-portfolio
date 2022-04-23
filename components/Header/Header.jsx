import React, { useState } from "react";
import logo from "../../public/img/Logo.png";
import {
  StyledLogo,
  NavBar,
  Wrapper,
  HamburguerButton,
  StyledMenu,
  MenuFrame,
  StyledMdMenu,
  ShadowBlur,
  LogoWrapper,
  ShadowBlurMiddle,
} from "./styles.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <NavBar>
        <LogoWrapper>
          <StyledLogo src={logo} alt="Logo" layout="fill" objectFit="cover" />
        </LogoWrapper>
        {isOpen ? (
          <StyledMenu />
        ) : (
          <HamburguerButton onClick={() => setIsOpen(true)} />
        )}
        <StyledMdMenu header />
      </NavBar>
      {isOpen && <MenuFrame onClick={() => setIsOpen(false)} />}
      <ShadowBlur />
      <ShadowBlurMiddle />
    </Wrapper>
  );
};

export default Header;
