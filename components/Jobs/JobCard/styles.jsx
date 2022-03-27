import styled from "styled-components";
import ResponsiveImage from "../../ResponsiveImage";
import Button from "../../Button";

export const Wrapper = styled.div`
  margin-bottom: -83px;
`;

export const ImageWrapper = styled(ResponsiveImage)`
  border: 1px solid ${(props) => props.theme.colors.primary.border} !important;
  border-radius: 24px;
`;

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white.zero2};
  border-radius: 24px;
  padding-top: 16px;
  max-width: 288px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: -115px;
`;

export const Header = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary.zero1};
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.black.zero1};
  font-size: 24px;
  font-family: "Playfair Display";
  font-weight: normal;
  text-align: center;
  margin-bottom: 8px;
`;

export const Text = styled.div`
  text-align: center;
  margin: 16px 16px 0 16px;
`;

export const StyledButton = styled(Button)`
  margin: 40px 0 16px;
  padding: 12px;
`;
