import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

export const Main = styled.main`
  padding-inline: 1.5rem;
  position: relative;
  background-color: transparent;

  ${breakAt("md")} {
    padding-inline: 11.5rem;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 1.5rem;
`;

export const H2 = styled.h2`
  margin-bottom: 3rem;
`;

export const H3 = styled.h3`
  background-color: transparent;
`;

export const Paragraph = styled.p`
  background-color: transparent;

  & ul {
    background-color: transparent;
  }

  & li {
    background-color: transparent;
    list-style: disc;
    margin-left: 1.5rem;
  }
`;
