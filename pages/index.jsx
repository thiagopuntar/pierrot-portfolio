import Head from "next/head";
import MainHero from "../components/MainHero";
import AboutMe from "../components/AboutMe";
import styled from "styled-components";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Values from "../components/Values";

const Main = styled.main`
  margin: 0 24px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thiago Castro</title>
        <meta name="description" content="Thiago Castro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Main>
        <MainHero />
        <AboutMe />
        <Values />
        <Jobs />
      </Main>
      {/* <Footer /> */}
    </div>
  );
}
