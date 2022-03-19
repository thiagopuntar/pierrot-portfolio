import styled from "styled-components";
import ImageWrapper from "../ImageWrapper";

export const Location = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 10px;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 24px;
`;

export const ImageStyled = styled(ImageWrapper)`
  /* flex: 2; */
`;

export const H1 = styled.h1`
  margin-bottom: 16px;

  & * {
    font-family: "Playfair Display";
    font-size: 32px;
    line-height: 40px;
  }

  strong {
    color: ${(props) => props.theme.colors.secondary.zero4};
  }
`;
