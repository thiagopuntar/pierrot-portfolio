import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HamburguerButton,
  StyledLink,
  MenuWrapper,
  SubMenuWrapper,
} from "./styles";

const MenuLink = ({
  href,
  name,
  variant,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <StyledLink
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isActive={isActive}
      variant={variant}
    >
      <Link href={href} passHref>
        <a>
          {name}
          {children}
        </a>
      </Link>
    </StyledLink>
  );
};

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const [isExpanded, setExpand] = useState(false);

  return (
    <>
      <HamburguerButton onClick={() => setOpen(!isOpen)} />
      <MenuWrapper isOpen={isOpen} onClick={() => setOpen(false)}>
        <MenuLink name="Home" href="/" />
        <MenuLink
          name="Trabalhos"
          href=""
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}
        >
          <SubMenuWrapper isExpanded={isExpanded}>
            <MenuLink name="Finni$" href="/jobs/finni$" />
            <MenuLink name="Cyber Crypto" href="/jobs/cyberCrypto" />
            <MenuLink name="Portifólio" href="/jobs/portifolio" />
          </SubMenuWrapper>
        </MenuLink>
        <MenuLink name="Sobre Mim" href="/about" />
      </MenuWrapper>
    </>
  );
};

export default Menu;
