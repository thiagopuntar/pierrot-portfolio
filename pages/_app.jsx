import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import GlobalStyle from "../style/GlobalStyle";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
