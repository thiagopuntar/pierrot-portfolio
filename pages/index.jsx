import Head from "next/head";
import MainHero from "../components/MainHero";
import AboutMe from "../components/AboutMe";
import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  padding: 0 5%;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thiago Castro</title>
        <meta name="description" content="Thiago Castro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <MainHero />
        <AboutMe />
      </Main>
    </div>
  );
}
