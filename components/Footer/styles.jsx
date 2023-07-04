import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";

export const Wrapper = styled.footer`
  position: relative;
  padding: 1.5em 1em;
  margin-top: 7em;
  background: ${(props) => props.theme.colors.primary.z5};
  color: ${({ theme }) => theme.colors.white.z2};

  ${breakAt("md")} {
    padding-inline: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div``;

export const Name = styled.h1`
  color: var(--secondary-1);
  font-size: 1.25rem;
  min-height: 44px;

  ${breakAt("md")} {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const MenuWrapper = styled.ul`
  li {
    margin-top: 0.5em;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SocialWrapper = styled.ul`
  font-size: 0.875rem;
  line-height: 1rem;
  margin-top: 1em;

  width: 65%;

  li {
    margin-top: 1em;
  }

  ${breakAt("md")} {
    font-size: 1.125rem;
  }
`;

export const SocialAnchor = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
`;
