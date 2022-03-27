import styled from "styled-components";

export const StyledA = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 15%;
    bottom: -3px;
    background-color: ${(props) =>
      props.isActive && props.theme.colors.secondary.dark};
    height: 3px;
    width: 70%;
  }

  &:hover {
    transform: scale(105%);
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 15%;
    bottom: -3px;
    background-color: ${(props) => props.theme.colors.secondary.dark};
    height: 3px;
    width: 70%;
  }

  ${(props) =>
    props.isActive &&
    `
    font-weight: 700;
  `}
`;
