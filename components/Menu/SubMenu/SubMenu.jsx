import React from "react";
import MenuLink from "../MenuLink";
import { SubMenuWrapper } from "./styles";

const SubMenu = () => {
  return (
    <SubMenuWrapper>
      <MenuLink name="Finni$" />
      <MenuLink name="Cyber Crypto" />
      <MenuLink name="Portifólio" />
    </SubMenuWrapper>
  );
};

export default SubMenu;
