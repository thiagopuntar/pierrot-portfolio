import styled from "styled-components";

export const StyledA = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  position: relative;
  display: inline;

  &:hover {
    transform: scale(105%);
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.12rem;
    background-color: ${(props) =>
      props.isActive && props.theme.colors.secondary.z1};
    height: 0.1rem;
    width: 100%;
    z-index: 10;
  }
`;

export const Span = styled.span`
  border-bottom: ${(props) =>
    props.isActive && `3px solid ${props.theme.colors.secondary.z1}`};

  ${(props) =>
    props.isActive &&
    `
    font-weight: 700;
  `}
`;
