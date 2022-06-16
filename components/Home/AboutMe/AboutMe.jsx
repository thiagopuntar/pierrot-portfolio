import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import imgHero2 from "../../../public/img/img-hero-2.jpg";
import { linkedinLink, resume } from "../../../constants/links";
import ResponsiveImage from "../../ResponsiveImage";
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
          Nos ultimos anos decidi mudar de vida, migrei de carreira para UX
          Design.
        </p>
        <br />
        <p>
          Tecnologia e inovação sempre foram uma paixão, adoro artes e criar
          desenhos e imagens. Descobri no UX uma nova paixão.
        </p>
        <Link href="/about" passHref>
          <LinkWrapper>
            <Span>Saiba mais sobre mim</Span>
            <MdArrowRightAlt className="arrow-right" />
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
