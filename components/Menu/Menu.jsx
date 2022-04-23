import React, { useState } from "react";
import MenuLink from "./MenuLink";
import SubMenu from "./SubMenu/SubMenu";

const Menu = ({ className, header }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    if (!header) return;
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    if (!header) return;
    setShowSubMenu(false);
  };

  return (
    <>
      <ul className={className}>
        <MenuLink name="Home" href="/" />
        <MenuLink
          name="Trabalhos"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <MenuLink name="Sobre Mim" href="/about" />
        <MenuLink
          name="Contato"
          href="/contact"
          variant={header ? "contact" : ""}
        />
      </ul>
      {showSubMenu && <SubMenu />}
    </>
  );
};

export default Menu;
