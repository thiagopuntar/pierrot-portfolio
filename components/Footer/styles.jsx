import styled from "styled-components";
import { breakAt } from "../../constants/breakpoints";
import Button from "../Button";
import Menu from "../Menu";

export const Wrapper = styled.footer`
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.primary.z5};
  margin-top: 7.5rem;
  justify-content: space-around;

  & * {
    color: ${(props) => props.theme.colors.secondary.z1};
    background: ${(props) => props.theme.colors.primary.z5};
  }

  ${breakAt("md")} {
    padding-inline: 10%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Name = styled.h2`
  color: ${(props) => props.theme.colors.secondary.dark};
  font-size: 1.25rem;
  font-family: "Playfair Display";
`;

export const StyledButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.secondary.z1};
  line-height: 1.5rem;
  padding-inline: 0.75rem;
`;

export const ProfileWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  & * {
    color: ${(props) => props.theme.colors.white.z2};
  }

  & a {
    text-decoration: none;
  }
`;

export const JobsWrapper = styled.ul`
  margin-left: 1em;
`;

export const SocialWrapper = styled.div`
  font-size: 0.875rem;
  line-height: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SocialAnchor = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
