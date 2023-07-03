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
    --primary-1: hsl(271deg, 68%, 18%);
    --primary-2: hsl(270deg, 64%, 27%);
    --primary-3: hsl(270deg, 82%, 26%);
    --primary-4: hsl(274deg, 100%, 46%);
    --primary-5: hsl(270deg, 37%, 86%);

    --secondary-1: hsl(44deg, 91%, 43%);
    --secondary-2: hsl(47deg, 92%, 64%);
    --secondary-3: hsl(54deg, 62%, 49%);
    --secondary-4: hsl(54deg, 74%, 79%);
    --secondary-5: hsl(53deg, 77%, 88%);

    --background-1: hsl(60deg, 100%, 89%);
    --background-2: hsl(60deg, 30%, 98%);

    --white-1: hsl(213deg, 33%, 95%);
    --white-2: hsl(240deg, 100%, 97%);

    --black-1: hsl(262deg, 16%, 14%);
    --black-2: hsl(0deg, 0%, 27%);
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: "Poppins";
    background-color: var(--white-1);
    box-sizing: border-box;
    color: var(--black-1);
    font-size: 0.875rem;
    line-height: 1.5;

    ${breakAt("md")} {
      font-size: 1.125rem;
    }
  }

  h1 {
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
