import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

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

export const H4 = styled.h4`
  display: list-item;
  list-style-position: inside;
  margin: 1em;
`;

export const Paragraph = styled.p`
  ${({ spaced }) => spaced && "margin: 1em 0;"};

  & li {
    list-style: disc;
    list-style-position: inside;
  }

  & a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Ol = styled.ol`
  margin: 1em 0;
  list-style-position: inside;

  li {
    margin: 1em 0;
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
