import React from "react";
import JobCard from "./JobCard";
import jobFinish from "../../../public/img/job-finish.png";
import jobPortfolio from "../../../public/img/job-portfolio.png";
import jobCrypto from "../../../public/img/job-crypto.png";
import { H2, JobsWrapper, Wrapper } from "./styles";

const Jobs = () => {
  return (
    <Wrapper>
      <H2 id="works">Trabalhos</H2>
      <JobsWrapper>
        <JobCard
          imageSrc={jobFinish}
          imageAlt="Finnis"
          header="Aplicativo Financeiro"
          title="Neon Finni$"
          href="/jobs/finni$"
        >
          Como os correntistas do Banco Neon controlam suas finanças e ao mesmo
          tempo economizam para ter uma melhor qualidade de vida.
        </JobCard>
        <JobCard
          imageSrc={jobPortfolio}
          imageAlt="Portifólio"
          header="Criação do Portifólio"
          title="Portifólio"
          href="/jobs/portifolio"
          align="right"
        >
          Como foi pensado e estruturado o desenvolvimento desse portifólio.
          Utilizando ferramentas e técnicas de UX.
        </JobCard>

        <JobCard
          imageSrc={jobCrypto}
          imageAlt="Portifólio"
          header="Aplicativo de NFT"
          title="Cyber Crypto"
          href="/jobs/cyberCrypto"
        >
          Desenvolvimento de design para um aplicativo de NFT, com elementos de
          carteira e compra de NFT
        </JobCard>
      </JobsWrapper>
    </Wrapper>
  );
};

export default Jobs;
