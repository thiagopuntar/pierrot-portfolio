import styled from "styled-components";

export const StyledA = styled.a`
  text-decoration: none;
  font-size: 18px;
  position: relative;
  display: inline;
  background-color: transparent;
  transition: all 0.1s;
  transition-property: transform, color;

  &:hover {
    transform: scale(105%);
    color: ${(props) => props.theme.colors.secondary.z4};
  }

  & span {
    background-color: transparent;
    font-size: inherit;
    color: inherit;

    ${(props) =>
      props.isActive &&
      props.variant !== "contact" &&
      `
    color: ${props.theme.colors.secondary.z4}
  `}
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
