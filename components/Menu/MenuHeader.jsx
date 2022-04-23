import React, { useState } from "react";
import {
  StyledMenu,
  HamburguerButton,
  StyledMdMenu,
  MenuFrame,
} from "./styles";

const MenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <>
          <StyledMenu />
          <MenuFrame onClick={() => setIsOpen(false)} />
        </>
      ) : (
        <HamburguerButton onClick={() => setIsOpen(true)} />
      )}
      <StyledMdMenu header />
    </>
  );
};

export default MenuHeader;
