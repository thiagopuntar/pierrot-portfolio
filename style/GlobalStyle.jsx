import { createGlobalStyle } from "styled-components";
import { breakAt } from "../constants/breakpoints";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: inherit;
  }

  body {
    font-family: "Poppins";
    background-color: ${(props) => props.theme.colors.bg.white};
    box-sizing: border-box;
    color: ${theme.colors.black.z1};
    font-size: 0.875rem;

    ${breakAt("md")} {
      font-size: 1.125rem;
    }
  }

  h1 {
    font-family: "Playfair Display", Sans-Serif;
    font-size: 2rem;
  }

  h2 {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.15;

    ${breakAt("md")} {
      font-size: 1.75rem;
    }
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyle;
