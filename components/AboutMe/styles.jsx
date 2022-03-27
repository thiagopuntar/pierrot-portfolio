import styled from "styled-components";
import Button from "../Button";

export const H1 = styled.h1`
  font-family: Poppins;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const ContentWrapper = styled.div`
  margin-top: 24px;

  & > p {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  margin: 40px 0 80px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  width: 192px;
`;

export const Span = styled.span`
  font-size: 14px;
`;

export const LinkWrapper = styled.a`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  & * {
    color: ${(props) => props.theme.colors.primary.z1};
  }
`;
