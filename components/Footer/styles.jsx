import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";
import Button from "../Button";

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

  ${breakAt("md")} {
    width: 85%;
  }
`;

export const Title = styled.div``;

export const Name = styled.h1`
  color: ${(props) => props.theme.colors.secondary.z1};
  font-size: 1.25rem;
  font-family: "Playfair Display";
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

export const StyledButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.secondary.z1};
  color: ${({ theme }) => theme.colors.secondary.z1};
  line-height: 1.5rem;
  padding-inline: 0.75rem;
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
