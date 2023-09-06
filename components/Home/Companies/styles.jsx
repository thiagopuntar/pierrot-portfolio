import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";

export const CompaniesWrapper = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  ${breakAt("md")} {
    flex-direction: row;
    gap: 64px;
  }
`;
