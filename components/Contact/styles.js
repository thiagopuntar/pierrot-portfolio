import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";
import Button from "../Button";

export const ContactWrapper = styled.div`
  ${breakAt("md")} {
    display: flex;
    gap: 2rem;
  }
`;

export const FormWrapper = styled.div``;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primary.z1};
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Poppins";
  line-height: 2rem;
  margin-bottom: 1em;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  position: relative;
  z-index: 1;
  background-color: transparent;
  margin-bottom: 2.5rem;
`;

export const StyledButton = styled(Button)`
  padding: 0.75rem;
  margin: 1.5rem 0;
`;
