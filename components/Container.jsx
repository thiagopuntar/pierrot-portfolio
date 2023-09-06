import styled from "styled-components";
import { breakAt } from "../constants/breakpoints";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1.5em;
  position: relative;
  background-color: transparent;
  row-gap: 24px;

  ${breakAt("md")} {
    row-gap: 114px;
    padding-inline: 0;
    width: 70%;
    max-width: 1008px;
    margin: 0 auto;
  }
`;
