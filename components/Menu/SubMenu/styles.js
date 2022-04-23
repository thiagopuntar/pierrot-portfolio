import styled from "styled-components";

export const SubMenuWrapper = styled.ul`
  background-color: ${(props) => props.theme.colors.white.z2};
  padding: 0.75rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 2;
  animation: fade-in 0.3s ease-in;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & * {
    background-color: inherit;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;
