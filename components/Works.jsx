import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";
import Image from "next/image";
import work1 from "../public/img/work-1.png";
import Button from "./Button";

const Wrapper = styled.section``;

const H2 = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #4b098d;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Works = () => {
  return (
    <Wrapper>
      <H2>Trabalhos</H2>
      <WorkCard
        img={<Image src={work1} alt="Neon finish" />}
        header="Aplicativo Financeiro"
        title="Neon Finish"
      >
        Como os correntistas do Banco Neon controlam suas finanças e ao mesmo
        tempo economizam para ter uma melhor qualidade de vida.
        <ButtonWrapper>
          <Button>Veja o estudo de caso</Button>
        </ButtonWrapper>
      </WorkCard>
    </Wrapper>
  );
};

export default Works;
