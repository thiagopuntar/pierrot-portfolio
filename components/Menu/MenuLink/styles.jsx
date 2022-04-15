import styled from "styled-components";

export const StyledA = styled.a`
  text-decoration: none;
  font-size: 18px;
  position: relative;
  display: inline;
  background-color: transparent;

  &:hover {
    transform: scale(105%);
  }

  ${(props) =>
    props.variant === "contact" &&
    `
    color: ${props.theme.colors.primary.z1};
    border-radius: 20px;
    border: 2px solid ${props.theme.colors.primary.z1};
    padding: 0.5em 0.7em;
    box-shadow: 0px 2px 3px rgba(83, 38, 128, 0.6);
    margin-left: 2em;
  `}
`;

export const Span = styled.span`
  background-color: transparent;
  font-size: inherit;
  color: inherit;

  border-bottom: ${(props) =>
    props.isActive && `3px solid ${props.theme.colors.secondary.z1}`};

  ${(props) =>
    props.isActive &&
    `
    font-weight: 700;
    font-size: 18px;
  `}

  &:hover {
    border-bottom: ${(props) => `3px solid ${props.theme.colors.secondary.z1}`};
  }
`;
