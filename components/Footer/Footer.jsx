import Link from "next/link";
import React from "react";
import { BsMedium, BsLinkedin, BsDribbble } from "react-icons/bs";
import {
  dribbbleLink,
  linkedinLink,
  mediumLink,
  resume,
} from "../../constants/links";
import {
  Name,
  SocialWrapper,
  SocialAnchor,
  ContentWrapper,
  RightColumn,
  Title,
  Wrapper,
  MenuWrapper,
} from "./styles";
import Container from "../Container";
import Button from "../Button";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <Title>
            <Name>Thiago Castro</Name>
            <MenuWrapper>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#works">Trabalhos</Link>
              </li>
              <li>
                <Link href="/about">Sobre mim</Link>
              </li>
            </MenuWrapper>
          </Title>
          <RightColumn>
            <Button
              variant="outlined"
              color="white"
              onClick={() => window.open(resume, "_blank")}
            >
              Baixe o currículo
            </Button>
            <SocialWrapper>
              <li>
                <SocialAnchor
                  href={linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Linkedin</span>
                  <BsLinkedin />
                </SocialAnchor>
              </li>
              <li>
                <SocialAnchor
                  href={mediumLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Medium</span>
                  <BsMedium />
                </SocialAnchor>
              </li>
              <li>
                <SocialAnchor
                  href={dribbbleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Dribble</span>
                  <BsDribbble />
                </SocialAnchor>
              </li>
            </SocialWrapper>
          </RightColumn>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
