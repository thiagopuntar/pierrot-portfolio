import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HamburguerButton,
  MenuWrapper,
  MenuItemWrapper,
  SubmenuItemWrapper,
  SubMenu,
  SubMenuWrapper,
} from "./styles";

const MenuItem = ({ href, name, children, variant }) => {
  const router = useRouter();
  const isOnJob = router.asPath.includes("jobs") && href === "/jobs";
  const isActive = router.asPath === href || isOnJob;

  const ComponentWrapper =
    variant === "submenu" ? SubmenuItemWrapper : MenuItemWrapper;

  return (
    <ComponentWrapper isActive={isActive}>
      {children || (
        <span>
          <Link href={href} passHref>
            <a>{name}</a>
          </Link>
        </span>
      )}
    </ComponentWrapper>
  );
};

const SubmenuItem = (props) => <MenuItem {...props} variant="submenu" />;

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HamburguerButton onClick={() => setOpen(!isOpen)} />
      <MenuWrapper isOpen={isOpen} onClick={() => setOpen(false)}>
        <MenuItem name="Home" href="/" />
        <MenuItem href="/jobs">
          <span>Trabalhos</span>
          <SubMenuWrapper>
            <SubMenu>
              <SubmenuItem name="Neon Finni$" href="/jobs/finni$" />
              <SubmenuItem name="Krypton" href="/jobs/cyberCrypto" />
              <SubmenuItem name="Coletânea" href="/jobs/collection" />
              <SubmenuItem name="Portifólio" href="/jobs/portifolio" />
            </SubMenu>
          </SubMenuWrapper>
        </MenuItem>
        <MenuItem name="Sobre Mim" href="/about" />
      </MenuWrapper>
    </>
  );
};

export default Menu;
