import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

export const Wrapper = styled.section`
  ${breakAt("md")} {
    display: flex;
    gap: 6rem;
  }
`;

export const TextWrapper = styled.div`
  flex-shrink: 1;
`;

export const ImageWrapper = styled.div`
  flex: 1 0 354px;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.3em;
`;
