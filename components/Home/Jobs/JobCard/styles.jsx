import styled from "styled-components";
import Button from "../../../Button";
import { breakAt } from "../../../../constants/breakpoints";

export const Wrapper = styled.div`
  background-color: var(--white-2);
  border-radius: 24px;
  box-shadow: 0px 4px 10px rgba(83, 38, 128, 0.5);
  margin-bottom: 25%;

  ${breakAt("md")} {
    max-width: 640px;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: -25%;
  width: 85%;
  margin-inline: auto;
  position: relative;
  border-radius: 24px;
  min-height: 300px;

  ${breakAt("md")} {
    max-width: 640px;
    min-height: 520px;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 1rem;
  margin: 0 auto;
  border-radius: 24px;
  padding: 16px 24px;

  ${breakAt("md")} {
    padding: 24px 60px;
  }
`;

export const Title = styled.h4`
  background-color: inherit;
  color: var(--black-3);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Text = styled.div`
  background-color: inherit;
  font-size: 1rem;
  margin-bottom: 2.5rem;
`;

export const StyledButton = styled(Button)`
  padding: 0.75rem;

  ${breakAt("md")} {
  }
`;
