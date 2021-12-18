import React from "react";
import styled from "styled-components";
import ImageWrapper from "./ImageWrapper";
import logo from "../public/img/Logo.png";
import Image from "next/image";

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background: ${(props) => props.theme.bg.header};
  display: flex;
  justify-content: space-around;
  z-index: 1;

  & * {
    background: ${(props) => props.theme.bg.header};
  }
`;

const MenuWrapper = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={logo} alt="Logo" />
      </ImageWrapper>
      <MenuWrapper>
        <li>Home</li>
        <li>Trabalhos</li>
        <li>Sobre Mim</li>
        <li>Contato</li>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;
