import React from "react";
import JobCard from "./JobCard";
import jobPortfolio from "../../../public/img/job-portfolio.png";
import jobCrypto from "../../../public/img/job-crypto.png";
import { H2, JobsWrapper, Wrapper } from "./styles";

const Jobs = () => {
  return (
    <Wrapper>
      <H2 id="works">Trabalhos</H2>
      <JobsWrapper>
        <JobCard
          imageSrc={jobPortfolio}
          imageAlt="Portifólio"
          header="Criação do Portifólio"
          title="Portifólio"
          href="/jobs/portifolio"
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
          align="right"
        >
          Desenvolvimento de design para um aplicativo de NFT, com elementos de
          carteira e compra de NFT
        </JobCard>
      </JobsWrapper>
    </Wrapper>
  );
};

export default Jobs;
