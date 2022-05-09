import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

export const Main = styled.main`
  padding-inline: 1.5rem;
  position: relative;
  background-color: transparent;

  ${breakAt("md")} {
    padding-inline: 0;
    width: 70%;
    max-width: 1008px;
    margin: 0 auto;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 1em;
`;

export const H2 = styled.h2`
  margin-bottom: 3rem;
  text-align: center;
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  margin: 1em 0;
`;

export const Paragraph = styled.p`
  & li {
    list-style: disc;
    margin-left: 1.5em;
  }
`;

export const StyledImage = styled.div`
  margin: 4em 0;
`;

export const Columns = styled.div`
  ${breakAt("md")} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
