import React from "react";
import JobCard from "./JobCard";
import jobFinish from "../../../public/img/job-finish.png";
import jobCollection from "../../../public/img/job-collection.png";
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
          imageSrc={jobCollection}
          imageAlt="Coletânea"
          header="Processo de Trabalho"
          title="Coletânea de trabalhos"
          href="/jobs/portifolio"
          align="right"
        >
          Como era a metodologia de trabalho e meu processo de design nos
          projetos na minha primeira experiencia com UX/UI Design.
        </JobCard>

        <JobCard
          imageSrc={jobCrypto}
          imageAlt="Krypton"
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
