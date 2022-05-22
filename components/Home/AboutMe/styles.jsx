import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";
import Button from "../../Button";

export const H1 = styled.h1`
  font-family: Poppins;
  font-size: 1.125rem;
  margin-bottom: 1em;

  ${breakAt("md")} {
    font-size: 1.25rem;
  }
`;

export const Wrapper = styled.section`
  margin: 9em 0 5em;
  position: relative;
  background-color: transparent;

  ${breakAt("md")} {
    margin: 10em 0;
    display: flex;
    align-items: flex-start;
    gap: 5%;
  }
`;

export const ImageWrapper = styled.div`
  ${breakAt("md")} {
    width: 50%;
    z-index: 1;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 1.5em;

  ${breakAt("md")} {
    margin-top: 0;
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 1.25rem;
`;

export const StyledButton = styled(Button)`
  width: 15rem;
  padding: 0.75em;
`;

export const Span = styled.span`
  font-size: 0.875rem;
`;

export const LinkWrapper = styled.a`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.625rem;
  & * {
    color: ${(props) => props.theme.colors.primary.z1};
  }

  .arrow-right {
    font-size: 1.5rem;
  }

  ${breakAt("md")} {
    font-weight: 700;

    span {
      font-size: 1.25rem;
    }

    .arrow-right {
      font-size: 2.5rem;
    }
  }
`;
