import Link from "next/link";
import React from "react";
import { BsMedium, BsLinkedin, BsDribbble } from "react-icons/bs";
import { linkedinLink, mediumLink, resume } from "../../constants/links";
import {
  Name,
  ProfileWrapper,
  SocialWrapper,
  StyledButton,
  SocialAnchor,
  JobsWrapper,
  Title,
  Wrapper,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Title>
        <Name>Thiago Castro</Name>
        <StyledButton
          variant="outlined"
          onClick={() => window.open(resume, "_blank")}
        >
          Baixe o currículo
        </StyledButton>
      </Title>
      <ProfileWrapper>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span>Trabalhos</span>
            <JobsWrapper>
              <li>
                <Link href="/jobs/finni">Finni$</Link>
              </li>
              <li>
                <Link href="/jobs/cyberCrypto">Cyber Crypto</Link>
              </li>
              <li>
                <Link href="/jobs/portifolio">Portifólio</Link>
              </li>
            </JobsWrapper>
          </li>
          <li>
            <Link href="/about">Sobre mim</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
        <SocialWrapper>
          <li>
            <SocialAnchor href={linkedinLink} target="_blank" rel="noreferrer">
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
            <SocialAnchor href={mediumLink} target="_blank" rel="noreferrer">
              <span>Dribble</span>
              <BsDribbble />
            </SocialAnchor>
          </li>
        </SocialWrapper>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Footer;
