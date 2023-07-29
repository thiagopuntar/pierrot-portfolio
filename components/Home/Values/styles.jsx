import Card from "./Card";
import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";

export const Wrapper = styled.section`
  position: relative;
  background-color: transparent;
`;

export const CardWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  ${breakAt("md")} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
  }
`;

export const StyledCard = styled(Card)`
  margin-bottom: 1rem;

  ${breakAt("md")} {
    margin-bottom: 0;
  }
`;
