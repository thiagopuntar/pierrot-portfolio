import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import { H1, Paragraph, Wrapper } from "./styles.jsx";
import hero from "../../public/img/about-me/hero.png";

const AboutHero = () => (
  <Wrapper>
    <H1>Sobre mim</H1>
    <Paragraph>
      Sou um UX/UI Design luso-brasileiro, ano passado decidi mudar de vida
      radicalmente, me mudei para Portugal e migrei de carreira para UX Design.
    </Paragraph>
    <ResponsiveImage src={hero} alt="Thiago Castro" />
  </Wrapper>
);

export default AboutHero;
