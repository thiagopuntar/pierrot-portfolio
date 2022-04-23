import styled from "styled-components";
import MainHero from "../components/Home/MainHero";
import AboutMe from "../components/Home/AboutMe";
import Jobs from "../components/Home/Jobs";
import Values from "../components/Home/Values";
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
