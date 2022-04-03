import React, { useState } from "react";
import logo from "../../public/img/Logo.png";
import {
  LogoWrapper,
  NavBar,
  Wrapper,
  HamburguerButton,
  StyledMenu,
  MenuFrame,
  StyledMdMenu,
  ShadowBlur,
} from "./styles.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <NavBar>
        <LogoWrapper src={logo} alt="Logo" />
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
