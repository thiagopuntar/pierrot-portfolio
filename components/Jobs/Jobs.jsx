import React from "react";
import JobCard from "./JobCard";
import job2 from "../../public/img/job-2.jpg";
import job3 from "../../public/img/job-3.png";
import { H2, JobsWrapper, Wrapper } from "./styles";

const Jobs = () => {
  return (
    <Wrapper>
      <H2>Trabalhos</H2>
      <JobsWrapper>
        <JobCard
          imageSrc={job2}
          imageAlt="Portifólio"
          header="Criação do Portifólio"
          title="Portifólio"
          href="/jobs/portifolio"
        >
          Como foi pensado e estruturado o desenvolvimento desse portifólio.
          Utilizando ferramentas e técnicas de UX.
        </JobCard>

        <JobCard
          imageSrc={job3}
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
