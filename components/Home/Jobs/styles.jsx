import styled from "styled-components";

export const Wrapper = styled.section``;

export const H2 = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.z1};
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const JobsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
