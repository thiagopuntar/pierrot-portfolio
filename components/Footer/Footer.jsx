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
  StyledButton,
  SocialAnchor,
  ContentWrapper,
  Title,
  Wrapper,
  MenuWrapper,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          <Name>Thiago Castro</Name>
          <MenuWrapper>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#works">Trabalhos</Link>
            </li>
            <li>
              <Link href="/about">Sobre mim</Link>
            </li>
          </MenuWrapper>
        </Title>
        <div>
          <StyledButton
            variant="outlined"
            onClick={() => window.open(resume, "_blank")}
          >
            Baixe o currículo
          </StyledButton>
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
              <SocialAnchor href={mediumLink} target="_blank" rel="noreferrer">
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
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
