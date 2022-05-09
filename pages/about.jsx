import React from "react";
import Container from "../components/Container";
import AboutHero from "../components/AboutHero";
import AboutText from "../components/AboutText/AboutText";

const aboutMe = () => (
  <main>
    <Container>
      <AboutHero />
      <AboutText />
    </Container>
  </main>
);

export default aboutMe;
