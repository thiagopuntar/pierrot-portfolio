import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

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

  ${breakAt("md")} {
    flex-direction: row;
    gap: 2em;
  }
`;

export const H1 = styled.h1`
  font-family: "Poppins";
  font-weight: normal;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2.7em;
  margin-bottom: 4.5rem;
  color: ${(props) => props.theme.colors.primary.z1};
`;

export const H2 = styled.h2`
  font-family: "Playfair Display";
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  margin-top: 2rem;

  ${breakAt("md")} {
    margin-top: 0;
    text-align: center;
  }
`;

export const HardSkillsWrapper = styled.div`
  ${breakAt("md")} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const HardSkillImg = styled.div`
  flex-shrink: 0;
`;

export const HardSkillText = styled.div`
  ${breakAt("md")} {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
  }
`;

export const SoftSkillsWrapper = styled.div`
  ${breakAt("md")} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
  }
`;

export const H3 = styled.h3`
  ${breakAt("md")} {
    margin-bottom: 2.5rem;
  }
`;

export const SkillList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;

  & li {
    font-size: 0.875rem;
    list-style: disc;
  }
`;
