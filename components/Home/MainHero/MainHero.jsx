import React from "react";
import ResponsiveImage from "../../ResponsiveImage";
import { MdLocationOn } from "react-icons/md";
import imgHero1 from "../../../public/img/img-hero-1.jpg";
import {
  Location,
  ContentWrapper,
  H1,
  H2,
  Wrapper,
  ImageWrapper,
} from "./styles";

const MainHero = () => (
  <Wrapper>
    <ContentWrapper>
      <Location>
        <MdLocationOn className="location__icon" />
        <span>Rio de Janeiro - Brasil</span>
      </Location>
      <H1>
        Oi! <br />
        Meu nome é <br />
        <strong>Thiago Castro</strong>
      </H1>
      <H2>
        Sou um UX/UI Design, no Rio de Janeiro, Brasil. Adoro me desafiar,
        aprender e curtir minha família.
      </H2>
    </ContentWrapper>
    <ImageWrapper>
      <ResponsiveImage
        src={imgHero1}
        alt="Thiago Castro"
        layout="responsive"
        priority
      />
    </ImageWrapper>
  </Wrapper>
);

export default MainHero;
