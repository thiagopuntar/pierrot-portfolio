import styled from "styled-components";
import { breakAt } from "../../../constants/breakpoints";

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: var(--primary-2);
  margin-bottom: 2rem;
  ${breakAt("md")} {
    margin-bottom: 4rem;
  }
`;

export default SectionTitle;
