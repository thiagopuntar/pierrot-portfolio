import React from "react";
import { Wrapper, CardWrapper, StyledCard } from "./styles";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const Values = () => {
  const data = [
    {
      title: "Aprendizado Contínuo",
      body: "Sempre tive curiosidade em aprender. Toda vez que aprendo algo novo fico empolgado para botar em prática.",
    },
    {
      title: "Trabalho Cooperativo",
      body: "Valorizo o trabalho em equipe, desafios reais e discutir problemas para buscar soluções em time.",
    },
    {
      title: "Resolução de Problemas",
      body: "Buscar resolver problemas sempre foi natural para mim, encontrei no UX ferramentas para facilitar essas resoluções.",
    },
    {
      title: "Autocrítica",
      body: "Quero aprender mais e melhorar sempre, gosto de refletir sobre minhas atitudes e conhecimentos.",
    },
    {
      title: "Tornar o mundo melhor",
      body: "Penso em facilitar o dia a dia das pessoas, busco ajudar em uma mudança com impacto real na vida delas.",
    },
    {
      title: "Observação e avaliação",
      body: "Gosto de observar o que as pessoas estão fazendo, desde o mais simples até algo mais complexo.",
    },
  ];

  return (
    <Wrapper>
      <SectionTitle>Valores e Princípios</SectionTitle>
      <CardWrapper>
        {data.map(({ title, body }) => (
          <StyledCard title={title} key={title}>
            {body}
          </StyledCard>
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Values;
