import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import imgHero2 from "../../../public/img/img-hero-2.jpg";
import { linkedinLink, resume } from "../../../constants/links";
import ResponsiveImage from "../../ResponsiveImage";
import Link from "next/link";
import SectionTitle from "../../shared/SectionTitle";
import {
  ContentWrapper,
  Wrapper,
  ButtonWrapper,
  StyledButton,
  Span,
  LinkWrapper,
  ImageWrapper,
  TextWrapper,
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
        <SectionTitle>Um pouco sobre mim</SectionTitle>
        <TextWrapper>
          <p>
            Sou apaixonado por conhecer e aprender coisas novas, migrei para UX
            Designer e estou construindo um caminho apaixonante nessa área.
          </p>

          <p>
            Tecnologia e inovação sempre foi uma paixão minha, adoro artes,
            criar desenhos e imagens. Descobrir no UX uma forma de unir isso e
            tecnologia.
          </p>
          <p>
            Algumas ferramentas e frameworks que utilizo:{" "}
            <strong>
              Design Thinking, Teste de Usabilidade, Metodologia agil,
              Prototipagem, Wireframe, Figma, Bechmarking, Pesquisa com usuário,
              Arquitetura da informação, Adobe XD, conhecimento em HTML5 & CSS3
              e Javascript.
            </strong>
          </p>
        </TextWrapper>
        <Link href="/about" passHref>
          <LinkWrapper>
            <Span>Saiba mais sobre mim</Span>
            <MdArrowRightAlt className="arrow-right" />
          </LinkWrapper>
        </Link>
        <ButtonWrapper>
          <StyledButton
            color="secondary"
            onClick={() => window.open(resume, "_blank")}
          >
            Baixar Currículo
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="primary"
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
