import styled from "styled-components";
import ResponsiveImage from "../../../ResponsiveImage";
import Button from "../../../Button";
import { breakAt } from "../../../../constants/breakpoints";

export const Wrapper = styled.div`
  margin-bottom: -5rem;
  ${breakAt("md")} {
    position: relative;
    margin-bottom: 3em;
    text-align: ${(props) => props.align || "left"};
  }
`;

export const ImageWrapper = styled.div`
  ${breakAt("md")} {
    position: relative;
    ${(props) => (props.align === "right" ? "right: -6em" : "left: -6em;")}
  }
`;

export const StyledImage = styled(ResponsiveImage)`
  border-radius: 0;
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
  box-shadow: 0px 4px 10px rgba(83, 38, 128, 0.5);

  ${breakAt("md")} {
    max-width: 346px;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.align === "right" ? "left: -6em" : "right: -6em;")}
  }
`;

export const Header = styled.h3`
  background-color: inherit;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.primary.z1};
  font-weight: bold;
  text-align: center;
  margin: 0.5em;
`;

export const Title = styled.h4`
  background-color: inherit;
  color: ${(props) => props.theme.colors.black.z1};
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
`;

export const Text = styled.div`
  background-color: inherit;
  font-size: 1rem;
  text-align: center;
  margin: 1.5rem 1rem 0 1rem;
`;

export const StyledButton = styled(Button)`
  margin: 2.5rem 0 1rem;
  padding: 0.75rem;

  ${breakAt("md")} {
    margin: 1rem;
  }
`;
