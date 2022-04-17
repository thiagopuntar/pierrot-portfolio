import MainHero from "../components/MainHero";
import AboutMe from "../components/AboutMe";
import styled from "styled-components";
import Jobs from "../components/Jobs";
import Values from "../components/Values";
import { breakAt } from "../constants/breakpoints";

const Main = styled.main`
  margin: 0 1.5rem;

  ${breakAt("md")} {
    margin-inline: 10%;
  }
`;

export default function Home() {
  return (
    <Main>
      <MainHero />
      <AboutMe />
      <Values />
      <Jobs />
    </Main>
  );
}
