import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";

export const Wrapper = styled.div`
  border-radius: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colors.white.z2};
  padding: 8px 8px 0 8px;
  transition: 0.2s ease-out;
  min-height: 224px;

  ${breakAt("md")} {
    padding: 24px 8px;
    max-width: 327px;
  }
`;

export const TopBorder = styled.div`
  border-top: 4px solid ${(props) => props.theme.colors.secondary.z1};
  width: 33%;
  margin-bottom: 24px;
  margin-left: 5px;

  ${breakAt("md")} {
    display: none;
  }
`;

export const Title = styled.h3`
  background: ${(props) => props.theme.colors.white.z2};
  color: ${(props) => props.theme.colors.primary.z1};
  font-family: "Playfair display";
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  background: ${(props) => props.theme.colors.white.z2};
  font-size: 16px;
`;
