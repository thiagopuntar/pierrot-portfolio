import Card from "./Card";
import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.zero1};
  margin-bottom: 32px;
`;

export const CardWrapper = styled.div``;

export const StyledCard = styled(Card)`
  margin-bottom: 16px;
`;
