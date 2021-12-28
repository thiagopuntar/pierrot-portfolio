import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BsMedium, BsLinkedin } from "react-icons/bs";

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.colors.bg.footer};
  display: flex;
  justify-content: space-around;

  & * {
    background: ${(props) => props.theme.colors.bg.footer};
  }

  & li {
    color: ${(props) => props.theme.colors.typography.button};
    margin: 10px 0;

    span {
      color: ${(props) => props.theme.colors.typography.button};
    }

    a * {
      color: ${(props) => props.theme.colors.typography.button};
      margin-right: 10px;
    }

    a {
      text-decoration: none;
    }
  }
`;

const ProfileWrapper = styled.ul``;

const ButtonWrapper = styled.div``;

const Name = styled.h6`
  color: ${(props) => props.theme.colors.secondary.dark};
  font-size: 24px;
  font-family: "Playfair Display";
  margin-bottom: 20px;
`;

const EmailWrapper = styled.span`
  font-style: italic;
`;

const SocialMediaWrapper = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <li>
          <Name>Thiago Castro</Name>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/thiagocastrocruz/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialMediaWrapper>Linkedin</SocialMediaWrapper>
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@thiagodesignerux"
            target="_blank"
            rel="noreferrer"
          >
            <SocialMediaWrapper>Medium</SocialMediaWrapper>
            <BsMedium />
          </a>
        </li>
        <li>
          <EmailWrapper>thiagodesignerux@gmail.com</EmailWrapper>
        </li>
        <li>
          <EmailWrapper>castro.thiagoux@gmail.com</EmailWrapper>
        </li>
      </ProfileWrapper>
      <ButtonWrapper>
        <Button variant="outlinedSecondary">Baixar currículo</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Footer;
