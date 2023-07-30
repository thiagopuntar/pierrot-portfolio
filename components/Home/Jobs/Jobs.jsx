import React from "react";
import JobCard from "./JobCard";
import SectionTitle from "../../shared/SectionTitle";
import jobFinish from "../../../public/img/job-finish.png";
import jobCollection from "../../../public/img/job-collection.png";
import jobPortifolio from "../../../public/img/job-portifolio.png";
import { JobsWrapper, Wrapper } from "./styles";

const Jobs = () => {
  return (
    <Wrapper>
      <SectionTitle id="works">Trabalhos</SectionTitle>
      <JobsWrapper>
        <JobCard
          imageSrc={jobPortifolio}
          imageAlt="Portifolio"
          title="Desenvolvimento do Portifólio"
          href="/jobs/portifolio"
        >
          Como construí o meu portifólio, como base no meu processo de design,
          aplicando metodologias e ferramentas de UX/UI para criar uma boa
          experiência aos usuários.
        </JobCard>
        <JobCard
          imageSrc={jobCollection}
          imageAlt="Coletânea"
          title="Coletânea de trabalhos"
          href="/jobs/collection"
        >
          Como era a metodologia de trabalho e meu processo de design nos
          projetos na minha primeira experiencia com UX/UI Design.
        </JobCard>
        <JobCard
          imageSrc={jobFinish}
          imageAlt="Finnis"
          title="Neon Finni$"
          href="/jobs/finni$"
          align="right"
        >
          Como os correntistas do Banco Neon controlam suas finanças e ao mesmo
          tempo economizam para ter uma melhor qualidade de vida.
        </JobCard>
      </JobsWrapper>
    </Wrapper>
  );
};

export default Jobs;
