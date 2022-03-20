import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      zero1: "#4B098D",
      zero2: "#ECD9FF",
      zero3: "#CC99FF",
      zero4: "#532680",
      zero5: "#341355",
    },
    secondary: {
      zero1: "#F5E129",
      zero2: "#FFF8B2",
      zero3: "#FFF48C",
      zero4: "#FEBA02",
      zero5: "#E5BA45",
    },
    bg: {
      white: "#FBFBF7",
      white2: "#F3F3E6",
    },
    white: {
      zero1: "#EDF1F6",
      zero2: "#EFEFFF",
    },
    black: {
      zero1: "#323649",
      zero2: "#211D28",
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
    background-color: ${(props) => props.theme.colors.bg.white};
    box-sizing: border-box;
    color: ${theme.colors.black.zero1};
  }

  h1 {
    font-family: "Playfair Display", Sans-Serif;
    font-size: 32px;
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
  }

  ul {
    list-style: none;
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
