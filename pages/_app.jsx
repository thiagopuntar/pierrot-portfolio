import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import GlobalStyle from "../style/GlobalStyle";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Head>
            <title>Thiago Castro</title>
            <meta name="description" content="Thiago Castro" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
