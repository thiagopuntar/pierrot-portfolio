import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";

export const Wrapper = styled.section`
  ${breakAt("md")} {
    display: flex;
    justify-content: space-between;
    gap: 10%;
  }
`;

export const Location = styled.div`
  margin: 1em 0;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 0.625rem;
  }

  ${breakAt("md")} {
    .location__icon {
      font-size: 1.5rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 1.5rem;
  flex: 80%;
`;

export const H1 = styled.h1`
  margin-bottom: 1em;

  & * {
    font-family: "Playfair Display";
    font-size: 2rem;
    line-height: 1.15;
  }

  strong {
    color: ${(props) => props.theme.colors.secondary.z4};
  }

  ${breakAt("md")} {
    font-size: 2.5rem;

    strong {
      font-size: 3.25rem;
    }
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`

export const ImageWrapper = styled.div`
  ${breakAt("md")} {
    display: block;
    width: 60%;
  }
`;
