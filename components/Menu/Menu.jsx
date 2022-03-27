import React from "react";
import MenuLink from "./MenuLink";
import { MenuWrapper } from "./styles";

const Menu = ({ className }) => {
  return (
    <MenuWrapper className={className}>
      <MenuLink name="Home" href="/" />
      <MenuLink name="Trabalhos" href="/works" />
      <MenuLink name="Sobre Mim" href="/about" />
      <MenuLink name="Contato" href="/contact" />
    </MenuWrapper>
  );
};

export default Menu;
