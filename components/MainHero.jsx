import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import imgHero1 from "../public/img/img-hero-1.jpg";
import ImageWrapper from "./ImageWrapper";

const Location = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 10px;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 24px;
`;

const ImageStyled = styled(ImageWrapper)`
  /* flex: 2; */
`;

const H1 = styled.h1`
  margin-bottom: 16px;

  & * {
    font-family: "Playfair Display";
    font-size: 32px;
    line-height: 40px;
  }

  strong {
    color: ${(props) => props.theme.colors.secondary.zero4};
  }
`;

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
    <ImageStyled>
      <Image src={imgHero1} alt="Thiago Castro" />
    </ImageStyled>
  </>
);

export default MainHero;
