import styled from "styled-components";

import { breakAt } from "../../../constants/breakpoints";

const SectionTitle = styled.h2`
  font-family: Poppins;
  font-size: 1.125rem;
  margin-bottom: 1em;
  font-weight: 600;

  ${breakAt("md")} {
    font-size: 1.25rem;
  }
`;

export default SectionTitle;
