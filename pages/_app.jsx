import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      default: "#4B098D",
      light: "#F2EFF9",
      dark: "#341355",
    },
    secondary: {
      zero1: "#F5E129",
      zero2: "#FFF8B2",
      zero3: "#FFF48C",
      zero4: "#FEBA02",
      zero5: "#E5BA45",
    },
    typography: {
      default: "#5B5E6E",
      light: "#7A7A7A",
      dark: "#323649",
      button: "#FBFBF7",
    },
    bg: {
      body: "#f3f3e6",
      footer: "#341355",
      header: "#E8E0FF",
    },
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body, * {
    font-family: "Poppins";
    background-color: #f3f3e6;
    box-sizing: border-box;
    color: ${theme.colors.typography.dark};
  }

  h1 {
    font-family: "Playfair Display", Sans-Serif;
    color: #323649;
    font-size: 32px;
  }

  h2 {
    color: #5B5E6E;
    font-weight: 300;
    font-size: 14px;
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
