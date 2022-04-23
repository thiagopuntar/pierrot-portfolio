import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.colors.white.z1};
  border-radius: 10px;
  padding-inline: 10px;
  min-height: 50px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus + label {
    font-weight: bold;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary.z1};
  }
`;

export const Label = styled.label`
  font-size: 1.125rem;
`;

export const StyledTextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.white.z1};
  border-radius: 10px;
  padding: 10px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus + label {
    font-weight: bold;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary.z1};
  }
`;
