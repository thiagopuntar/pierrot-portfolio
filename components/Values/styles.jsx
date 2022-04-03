import Card from "./Card";
import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.z1};
  margin-bottom: 2rem;
`;

export const CardWrapper = styled.div`
  ${breakAt("md")} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const StyledCard = styled(Card)`
  margin-bottom: 1rem;

  ${breakAt("md")} {
    margin-bottom: 0;
  }
`;
