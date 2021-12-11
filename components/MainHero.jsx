import React from 'react';
import Image from 'next/image'
import styled from 'styled-components'
import { MdLocationOn } from "react-icons/md";
import imgHero1 from "../public/img/img-hero-1.jpg";


const Location = styled.div``;

const TopBorder = styled.div`
  border-top: 4px solid ${props => props.theme.colors.secondary};
  width: 10.5%;
  margin-bottom: 20px;
`

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

const ImageWrapper = styled.div`
  flex: 2;

  & img {
    border-radius: 20px;
  }
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
    <ImageWrapper>
      <Image src={imgHero1} alt="Thiago Castro" />
    </ImageWrapper>
  </Hero>
);

export default MainHero;