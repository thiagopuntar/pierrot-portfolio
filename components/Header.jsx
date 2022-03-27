import React from "react";
import styled from "styled-components";
import logo from "../public/img/Logo.png";
import Image from "next/image";

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  background: ${(props) => props.theme.colors.bg.header};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  padding: 8px 0px;

  & * {
    background: ${(props) => props.theme.colors.bg.header};
  }
`;

const IconWrapper = styled.div`
  height: 50px;
  & img {
    border-radius: 15px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Image src={logo} alt="Logo" />
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
