import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.section`
  margin-top: 80px;
`;

export const H2 = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.z1};
  font-weight: bold;
  margin-bottom: 32px;
`;

export const StyledButton = styled(Button)`
  margin: 16px 0 16px;
  padding: 12px;
`;
