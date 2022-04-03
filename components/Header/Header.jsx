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
        <StyledMdMenu />
      </NavBar>
      {isOpen && <MenuFrame onClick={() => setIsOpen(false)} />}
      <ShadowBlur />
    </Wrapper>
  );
};

export default Header;
