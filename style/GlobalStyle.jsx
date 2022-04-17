import { createGlobalStyle } from "styled-components";
import { breakAt } from "../constants/breakpoints";
import { theme } from "./theme";

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
      font-size: 20px;
    }

    ${breakAt("xl")} {
      font-size: 22px;
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

export default GlobalStyle;
