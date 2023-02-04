import { createGlobalStyle } from "styled-components";
import { breakAt } from "../constants/breakpoints";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: inherit;
  }

  :root {
    --primary-1: hsl(270deg, 88%, 29%);
    --primary-2: hsl(270deg, 100%, 93%);
    --primary-3: hsl(270deg, 100%, 80%);
    --primary-4: hsl(270deg, 54%, 33%);
    --primary-5: hsl(270deg, 63%, 20%);

    --secondary-1: hsl(54deg, 91%, 56%);
    --secondary-2: hsl(54deg, 100%, 77%);
    --secondary-3: hsl(55deg, 100%, 85%);
    --secondary-4: hsl(47deg, 100%, 68%);
    --secondary-5: hsl(44deg, 99%, 50%);

    --background-1: hsl(60deg, 33%, 98%);
    --background-2: hsl(60deg, 35%, 93%);

    --white-1: hsl(213deg, 33%, 95%);
    --white-2: hsl(240deg, 100%, 97%);

    --black-1: hsl(230, 19, 24);
    --black-2: hsl(262, 16, 14);
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: "Poppins";
    background-color: ${(props) => props.theme.colors.bg.white};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black.z1};
    font-size: 0.875rem;
    line-height: 1.5;

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
