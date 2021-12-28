import React from "react";
import styled from "styled-components";
import { MdArrowRightAlt } from "react-icons/md";
import ImageWrapper from "./ImageWrapper";
import Image from "next/image";
import imgHero2 from "../public/img/img-hero-2.jpg";
import Button from "./Button";
import { linkedinLink, resume } from "../constants/links";

const H1 = styled.h1`
  font-family: Poppins;
  font-size: 16px;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  width: 50%;

  & > p {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const ImageStyled = styled(ImageWrapper)`
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  gap: 20px;
  margin-bottom: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  display: block;
  min-width: 223.72px;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary.default};
  font-weight: 600;
`;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <ImageStyled>
        <Image src={imgHero2} alt="Thiago Castro" />
      </ImageStyled>
      <ContentWrapper>
        <H1>Um pouco sobre mim</H1>
        <p>
          No último ano decidi mudar de vida, me mudei para Portugal e migrei de
          carreira para UX Design.
        </p>
        <p>
          Tecnologia e inovação sempre foi uma paixão minha, adoro artes e criar
          desenhos e imagens. Descobrir no UX uma nova paixão.
        </p>
        <LinkWrapper>
          <Span>Saiba mais sobre mim</Span>
          <MdArrowRightAlt size="26px" />
        </LinkWrapper>
        <ButtonWrapper>
          <StyledButton onClick={() => window.open(resume, "_blank")}>
            Baixe o Currículo
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
