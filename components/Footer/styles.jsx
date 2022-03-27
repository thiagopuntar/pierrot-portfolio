import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.footer`
  width: 100%;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.primary.z5};
  margin-top: 7.5rem;
  justify-content: space-around;

  & * {
    color: ${(props) => props.theme.colors.secondary.z1};
  }

  /* & * {
    background: ${(props) => props.theme.colors.bg.footer};
  }

  & li {
    color: ${(props) => props.theme.colors.typography.button};
    margin: 10px 0;

    span {
      color: ${(props) => props.theme.colors.typography.button};
    }

    a * {
      color: ${(props) => props.theme.colors.typography.button};
      margin-right: 10px;
    }

    a {
      text-decoration: none;
    }
  } */
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.colors.secondary.z1};
  line-height: 1.5rem;
  padding-inline: 0.75rem;
`;

export const ProfileWrapper = styled.ul``;

export const ButtonWrapper = styled.div``;

export const Name = styled.h2`
  color: ${(props) => props.theme.colors.secondary.dark};
  font-size: 1.25rem;
  font-family: "Playfair Display";
`;

export const EmailWrapper = styled.span`
  font-style: italic;
`;

export const SocialMediaWrapper = styled.span`
  &:hover {
    font-weight: bold;
  }
`;
