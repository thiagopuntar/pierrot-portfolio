import React from "react";
import styled from "styled-components";
import AboutHero from "../components/AboutHero";
import AboutText from "../components/AboutText/AboutText";

const Main = styled.main`
  padding: 24px;
`;

const aboutMe = () => (
  <Main>
    <AboutHero />
    <AboutText />
  </Main>
);

export default aboutMe;
