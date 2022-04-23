import React, { forwardRef } from "react";
import { InputWrapper, Label, StyledInput, StyledTextArea } from "./styles";

const Input = ({ type, label, id }) => {
  const InputComponent = type === "textarea" ? StyledTextArea : StyledInput;

  return (
    <InputWrapper>
      <InputComponent rows="5" id={id} name={id} />
      <Label htmlFor={id}>{label}</Label>
    </InputWrapper>
  );
};

export default forwardRef(Input);
