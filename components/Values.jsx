import React from "react";
import Card from "./Card";
import styled from "styled-components";

const H2 = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #4b098d;
  font-weight: 500;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 90%;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  max-width: 300px;
`;

const Values = () => {
  return (
    <section style={{ marginBottom: "200px" }}>
      <H2>Valores e Princípios</H2>
      <CardWrapper>
        <StyledCard title="Aprendizado Contínuo">
          Sempre tive curiosidade em aprender. Toda vez que aprendo algo novo
          fico empolgado para botar em prática.
        </StyledCard>
        <StyledCard title="Trabalho Cooperativo">
          Valorizo o trabalho em equipe, desafios reais e discutir problemas
          para buscar soluções em time.
        </StyledCard>
        <StyledCard title="Resolução de Problemas">
          Buscar resolver problemas sempre foi natural para mim, encontrei no UX
          ferramentas para facilitar essas resoluções.
        </StyledCard>
        <StyledCard title="Autocrítica">
          Quero aprender mais e melhorar sempre, gosto de refletir sobre minhas
          atitudes e conhecimentos.
        </StyledCard>
        <StyledCard title="Tornar o mundo melhor">
          Penso em facilitar o dia a dia das pessoas, busco ajudar em uma
          mudança com impacto real na vida delas.
        </StyledCard>
        <StyledCard title="Observação e avaliação">
          Gosto de observar o que as pessoas estão fazendo, desde o mais simples
          até algo mais complexo.
        </StyledCard>
      </CardWrapper>
    </section>
  );
};

export default Values;
