import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import {
  H1,
  ImageWrapper,
  Paragraph,
  TextWrapper,
  Wrapper,
} from "./styles.jsx";
import hero from "../../public/img/about-me/hero.jpg";

const AboutHero = () => (
  <Wrapper>
    <TextWrapper>
      <H1>Sobre mim</H1>
      <Paragraph>
        Sou um UX/UI Design luso-brasileiro, ano passado decidi mudar de vida
        radicalmente, me mudei para Portugal e migrei de carreira para UX
        Design.
      </Paragraph>
    </TextWrapper>
    <ImageWrapper>
      <ResponsiveImage
        className="hero-image"
        src={hero}
        alt="Thiago Castro"
        priority
      />
    </ImageWrapper>
  </Wrapper>
);

export default AboutHero;
