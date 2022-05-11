import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";
import Button from "../../Button";

export const H1 = styled.h1`
  font-family: Poppins;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.section`
  margin: 2.5rem 0 5rem;
  position: relative;
  background-color: transparent;

  ${breakAt("md")} {
    margin: 7rem 0 5rem;
    display: flex;
    align-items: flex-start;
    gap: 5%;
  }
`;

export const ImageWrapper = styled.div`
  ${breakAt("md")} {
    width: 70%;
    z-index: 1;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 1.5rem;

  & > p {
    font-size: 0.875rem;
  }

  ${breakAt("md")} {
    margin-top: 0;
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
  width: 14rem;
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
    font-size: 24px;
  }

  ${breakAt("md")} {
    font-weight: 700;

    .arrow-right {
      font-size: 40px;
    }
  }
`;