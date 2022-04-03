import { createGlobalStyle, ThemeProvider } from "styled-components";
import { breakAt } from "../constants/breakpoints";

const theme = {
  colors: {
    primary: {
      z1: "#4B098D",
      z2: "#ECD9FF",
      z3: "#CC99FF",
      z4: "#532680",
      z5: "#341355",
      border: "rgba(53, 26, 80, 0.3)",
    },
    secondary: {
      z1: "#F5E129",
      z2: "#FFF8B2",
      z3: "#FFF48C",
      z4: "#FEBA02",
      z5: "#E5BA45",
    },
    bg: {
      white: "#FBFBF7",
      white2: "#F3F3E6",
    },
    white: {
      z1: "#EDF1F6",
      z2: "#EFEFFF",
    },
    black: {
      z1: "#323649",
      z2: "#211D28",
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
    color: ${theme.colors.black.z1};

    ${breakAt("md")} {
      font-size: 18px;
    }

    ${breakAt("lg")} {
      font-size: 22px;
    }

    ${breakAt("xl")} {
      font-size: 24px;
    }
  }

  h1 {
    font-family: "Playfair Display", Sans-Serif;
    font-size: 2rem;
  }

  h2 {
    font-weight: 400;
    font-size: 0.875rem;
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
