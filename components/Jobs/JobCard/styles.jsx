import styled from "styled-components";
import ResponsiveImage from "../../ResponsiveImage";
import Button from "../../Button";

export const Wrapper = styled.div`
  margin-bottom: -5rem;
`;

export const ImageWrapper = styled(ResponsiveImage)`
  border: 1px solid ${(props) => props.theme.colors.primary.border} !important;
  border-radius: 24px;
`;

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white.z2};
  border-radius: 24px;
  padding-top: 1rem;
  max-width: 288px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: -7rem;
`;

export const Header = styled.h3`
  background-color: inherit;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.primary.z1};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h4`
  background-color: inherit;
  color: ${(props) => props.theme.colors.black.z1};
  font-size: 1.5rem;
  font-family: "Playfair Display";
  font-weight: normal;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Text = styled.div`
  background-color: inherit;
  text-align: center;
  margin: 1rem 1rem 0 1rem;
`;

export const StyledButton = styled(Button)`
  margin: 2.5rem 0 1rem;
  padding: 0.75rem;
`;
