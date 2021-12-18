import React from 'react';
import Image from 'next/image'
import styled from 'styled-components'
import { MdLocationOn } from "react-icons/md";
import imgHero1 from "../public/img/img-hero-1.jpg";
import ImageWrapper from "./ImageWrapper";

const Location = styled.div``;

const TopBorder = styled.div`
  border-top: 4px solid ${props => props.theme.colors.secondary};
  width: 10.5%;
  margin-bottom: 20px;
`;

const Hero = styled.div`
  display: flex;
  padding: 15%;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  flex: 4;

  & span {
    margin-left: 5px;
  }
`

const ImageStyled = styled(ImageWrapper)`
  flex: 2;
`;

const H1 = styled.h1`
  margin-bottom: 70px;

`

const MainHero = () => (
  <Hero>
    <ContentWrapper>
      <Location>
        <TopBorder />
        <MdLocationOn />
        <span>Povoa de Varzim – Portugal</span>
      </Location>
      <H1>Oi <br /> meu nome é Thiago Castro</H1>
      <h2>Sou um UX/UI Design luso-brasileiro, em <br /> Portugal. Adoro me desafiar, aprender e <br /> curtir minha família.</h2>
    </ContentWrapper>
    <ImageStyled>
      <Image src={imgHero1} alt="Thiago Castro" />
    </ImageStyled>
  </Hero>
);

export default MainHero;