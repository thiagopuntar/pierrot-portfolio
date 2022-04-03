import styled from "styled-components";

export const StyledA = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  position: relative;
  display: inline;
  background-color: transparent;

  &:hover {
    transform: scale(105%);
  }
`;

export const Span = styled.span`
  background-color: transparent;
  border-bottom: ${(props) =>
    props.isActive && `3px solid ${props.theme.colors.secondary.z1}`};

  ${(props) =>
    props.isActive &&
    `
    font-weight: 700;
  `}

  &:hover {
    border-bottom: ${(props) => `3px solid ${props.theme.colors.secondary.z1}`};
  }
`;
