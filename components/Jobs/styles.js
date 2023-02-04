import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";
import ResponsiveImage from "../ResponsiveImage";

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: 1em;
`;

export const Subtitle = styled.p`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1.5em 0;
`;

export const H4 = styled.h4`
  display: list-item;
  list-style-position: inside;
  margin: 1em;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5em;

  li {
    list-style: disc;
    list-style-position: inside;
  }

  a {
    margin-left: 0.25em;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Ol = styled.ol`
  margin: 1em 0;
  list-style-position: inside;

  li {
    margin: 1em 0;
  }
`;

const ImageWrapper = styled.div`
  margin: 48px 0;
`;

export const StyledImage = ({ src, alt }) => (
  <ImageWrapper>
    <ResponsiveImage src={src} alt={alt} />
  </ImageWrapper>
);

export const Ul = styled.ul`
  margin-left: 1em;

  li {
    margin-bottom: 1em;
  }
`;

export const Columns = styled.div`
  ${breakAt("md")} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
