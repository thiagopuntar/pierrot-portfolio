import React from "react";
import MenuLink from "./MenuLink";

const Menu = ({ className }) => {
  return (
    <ul className={className}>
      <MenuLink name="Home" href="/" />
      <MenuLink name="Trabalhos" href="/works" />
      <MenuLink name="Sobre Mim" href="/about" />
      <MenuLink name="Contato" href="/contact" variant="contact" />
    </ul>
  );
};

export default Menu;
