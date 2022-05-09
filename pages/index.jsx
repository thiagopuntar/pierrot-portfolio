import Container from "../components/Container";
import MainHero from "../components/Home/MainHero";
import AboutMe from "../components/Home/AboutMe";
import Jobs from "../components/Home/Jobs";
import Values from "../components/Home/Values";

export default function Home() {
  return (
    <main>
      <Container>
        <MainHero />
        <AboutMe />
        <Values />
        <Jobs />
      </Container>
    </main>
  );
}
