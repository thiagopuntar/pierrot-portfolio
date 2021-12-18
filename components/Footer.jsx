import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.bg.footer};
  display: flex;
  justify-content: space-around;

  & * {
    background: ${(props) => props.theme.bg.footer};
  }

  & li {
    color: #fbfbf7;
    margin: 5px 0;
  }
`;

const ProfileWrapper = styled.ul``;

const ButtonWrapper = styled.div``;

const Name = styled.h6`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  font-family: "Playfair Display";
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <li>
          <Name>Thiago Castro</Name>
        </li>
        <li>Linkedin</li>
        <li>Medium</li>
        <li>thiagodesignerux</li>
        <li>castro.thiagoux@gmail.com</li>
      </ProfileWrapper>
      <ButtonWrapper>
        <Button>Baixar currículo</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Footer;
