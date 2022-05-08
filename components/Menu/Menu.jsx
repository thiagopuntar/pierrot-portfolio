import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HamburguerButton,
  StyledLink,
  Wrapper,
  MenuWrapper,
  SubMenuWrapper,
} from "./styles";

const MenuLink = ({ className, href, name, variant, children }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <StyledLink isActive={isActive}>
      <Link href={href} className={className} passHref>
        <a variant={variant}>
          {name}
          {children}
        </a>
      </Link>
    </StyledLink>
  );
};

const Menu = ({ header }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      <HamburguerButton onClick={() => setOpen(!isOpen)} />
      <MenuWrapper isOpen={isOpen} onClick={() => setOpen(false)}>
        <MenuLink name="Home" href="/" />
        <MenuLink name="Trabalhos" href="">
          <SubMenuWrapper>
            <MenuLink name="Finni$" href="/jobs/finnis" />
            <MenuLink name="Cyber Crypto" href="/jobs/cyberCrypto" />
            <MenuLink name="Portifólio" href="/jobs/portifolio" />
          </SubMenuWrapper>
        </MenuLink>
        <MenuLink name="Sobre Mim" href="/about" />
        <MenuLink
          name="Contato"
          href="/contact"
          variant={header ? "contact" : ""}
        />
      </MenuWrapper>
    </Wrapper>
  );
};

export default Menu;
