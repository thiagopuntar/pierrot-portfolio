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
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 0.625rem;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 1.5rem;
  flex: 80%;
`;

export const H1 = styled.h1`
  margin-bottom: 1rem;

  & * {
    font-family: "Playfair Display";
    font-size: 2rem;
    line-height: 2.5rem;
  }

  strong {
    color: ${(props) => props.theme.colors.secondary.z4};
  }
`;

export const ImageWrapper = styled.div`
  ${breakAt("md")} {
    display: block;
    width: 60%;
  }
`;
