import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 1.5em;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2.5rem;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-family: "Poppins";
  font-weight: normal;
  font-size: 1.5rem;
  margin-top: 2.7em;
  margin-bottom: 1em;
  color: ${(props) => props.theme.colors.primary.z1};
`;

export const H2 = styled.h2`
  font-family: "Playfair Display";
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const H3 = styled.h3``;

export const SkillList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;

  & li {
    list-style: disc;
  }
`;
