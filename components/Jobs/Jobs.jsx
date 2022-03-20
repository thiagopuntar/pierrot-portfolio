import React from "react";
import JobCard from "./JobCard";
import job2 from "../../public/img/job-2.jpg";
import Button from "../Button";
import { ButtonWrapper, H2, StyledButton, Wrapper } from "./styles";
import ResponsiveImage from "../ResponsiveImage";

const Jobs = () => {
  return (
    <Wrapper>
      <H2>Trabalhos</H2>
      <JobCard
        imageSrc={job2}
        imageAlt="Portifólio"
        header="Criação do Portifólio"
        title="Portifólio"
      >
        Como foi pensado e estruturado o desenvolvimento desse portifólio.
        Utilizando ferramentas e técnicas de UX.
        <StyledButton variant="secondary">Veja o Trabalho</StyledButton>
      </JobCard>
    </Wrapper>
  );
};

export default Jobs;
