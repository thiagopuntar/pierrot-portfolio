import React, { useState } from "react";
import logo from "../../public/img/Logo.png";
import {
  LogoWrapper,
  NavBar,
  Wrapper,
  HamburguerButton,
  StyledMenu,
  MenuFrame,
} from "./styles.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Wrapper>
      <NavBar>
        <LogoWrapper height="32px" width="32px" src={logo} alt="Logo" />
        {isOpen ? (
          <StyledMenu />
        ) : (
          <HamburguerButton onClick={() => setIsOpen(true)} />
        )}
      </NavBar>
      {isOpen && <MenuFrame onClick={() => setIsOpen(false)} />}
    </Wrapper>
  );
};

export default Header;
