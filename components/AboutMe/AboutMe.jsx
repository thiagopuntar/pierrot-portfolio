import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import imgHero2 from "../../public/img/img-hero-2.jpg";
import { linkedinLink, resume } from "../../constants/links";
import ResponsiveImage from "../ResponsiveImage";
import Link from "next/link";
import {
  H1,
  ContentWrapper,
  Wrapper,
  ButtonWrapper,
  StyledButton,
  Span,
  LinkWrapper,
  ImageWrapper,
} from "./styles";

const AboutMe = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ResponsiveImage
          src={imgHero2}
          alt="Thiago Castro"
          layout="responsive"
        />
      </ImageWrapper>
      <ContentWrapper>
        <H1>Um pouco sobre mim</H1>
        <p>
          No último ano decidi mudar de vida, me mudei para Portugal e migrei de
          carreira para UX Design.
        </p>
        <br />
        <p>
          Tecnologia e inovação sempre foi uma paixão minha, adoro artes e criar
          desenhos e imagens. Descobrir no UX uma nova paixão.
        </p>
        <Link href="/about">
          <LinkWrapper>
            <Span>Saiba mais sobre mim</Span>
            <MdArrowRightAlt size={20} />
          </LinkWrapper>
        </Link>
        <ButtonWrapper>
          <StyledButton onClick={() => window.open(resume, "_blank")}>
            Baixe o meu currículo
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={() => window.open(linkedinLink, "_blank")}
          >
            Conecte-se no Linkedin
          </StyledButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AboutMe;
