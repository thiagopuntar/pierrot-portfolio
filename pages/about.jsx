import React from "react";
import styled from "styled-components";
import AboutHero from "../components/AboutHero";
import AboutText from "../components/AboutText/AboutText";
import { breakAt } from "../constants/breakpoints";

const Main = styled.main`
  padding: 24px;

  ${breakAt("md")} {
    padding-inline: 13.5rem;
  }
`;

const aboutMe = () => (
  <Main>
    <AboutHero />
    <AboutText />
  </Main>
);

export default aboutMe;
