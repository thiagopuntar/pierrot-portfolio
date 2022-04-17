import styled from "styled-components";

export const Wrapper = styled.section``;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-family: "Poppins";
  font-weight: normal;
  font-size: 1.5rem;
  margin-bottom: 1em;
  color: ${(props) => props.theme.colors.primary.z1};
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.3em;
  line-height: 1.5rem;
`;
