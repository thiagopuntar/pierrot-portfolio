import Container from "../components/Container";
import MainHero from "../components/Home/MainHero";
import AboutMe from "../components/Home/AboutMe";
import Jobs from "../components/Home/Jobs";
import Values from "../components/Home/Values";
import MyProcess from "../components/Home/MyProcess";
import Companies from "../components/Home/Companies";

export default function Home() {
  return (
    <main>
      <Container>
        <MainHero />
        <AboutMe />
        <MyProcess />
        <Values />
        <Companies />
        <Jobs />
      </Container>
    </main>
  );
}
