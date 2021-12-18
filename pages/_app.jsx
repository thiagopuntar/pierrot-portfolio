import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#323649",
    secondary: "#F5E129",
  },
  action: {
    primary: "#341355",
  },
  typography: {
    light: "#F3F3E6",
    dark: "#341355",
    title: "#4B098D",
  },
  bg: {
    footer: "#341355",
    header: "#E8E0FF80",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, * {
    font-family: "Poppins";
    background-color: #f3f3e6;
    box-sizing: border-box;
    color: #323649;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-family: "Playfair Display", Sans-Serif;
    color: #323649;
    font-size: 2.5rem;
  }

  h2 {
    color: #5B5E6E;
    font-weight: 300;
  }

  h2 {
    color: #323649;
    font-weight: 400;  
  }

  ul {
    list-style: none;
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
