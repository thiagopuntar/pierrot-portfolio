import styled from "styled-components";
import { breakAt } from "../constants/breakpoints";

export default styled.div`
  padding-inline: 1.5em;
  position: relative;
  background-color: transparent;

  ${breakAt("md")} {
    display: grid;
    gap: 114px;
    padding-inline: 0;
    width: 70%;
    max-width: 1008px;
    margin: 0 auto;
  }
`;
