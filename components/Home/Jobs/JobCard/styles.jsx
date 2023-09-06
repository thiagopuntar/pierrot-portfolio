import styled from "styled-components";
import Button from "../../../Button";
import { breakAt } from "../../../../constants/breakpoints";

export const Wrapper = styled.div`
  ${breakAt("md")} {
    max-width: 640px;
    margin-top: -300px;
  }
`;

export const ImageWrapper = styled.div`
  width: 85%;
  margin-inline: auto;
  position: relative;
  border-radius: 24px;
  min-height: 300px;

  ${breakAt("md")} {
    max-width: 640px;
    min-height: 520px;
    top: 300px;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 1rem;
  background-color: var(--white-2);
  border-radius: 24px;
  box-shadow: 0px 4px 10px rgba(83, 38, 128, 0.5);
  margin: 0 auto;
  padding: 16px 24px;

  ${breakAt("md")} {
    padding: 24px 60px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: end;
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
