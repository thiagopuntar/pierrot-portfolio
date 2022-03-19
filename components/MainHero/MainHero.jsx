import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import { MdLocationOn } from "react-icons/md";
import imgHero1 from "../../public/img/img-hero-1.jpg";
import { Location, ContentWrapper, H1 } from "./styles";

const MainHero = () => (
  <>
    <ContentWrapper>
      <Location>
        <MdLocationOn size={10} />
        <span>Póvoa de Varzim – Portugal</span>
      </Location>
      <H1>
        Oi! <br />
        Meu nome é <br />
        <strong>Thiago Castro</strong>
      </H1>
      <h2>
        Sou um UX/UI Design luso-brasileiro, em Portugal. Adoro me desafiar,
        aprender e curtir minha família.
      </h2>
    </ContentWrapper>
    <ResponsiveImage src={imgHero1} alt="Thiago Castro" />
  </>
);

export default MainHero;
