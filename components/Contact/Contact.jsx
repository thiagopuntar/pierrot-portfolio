import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import Input from "./Input";
import { H1, Paragraph, Form, StyledButton } from "./styles";
import imgContact from "../../public/img/contact/me.png";

const Contact = () => {
  return (
    <>
      <H1>Vamos Conversar?</H1>
      <Paragraph>
        Tem alguma dúvida? Quer bater um papo? Quer me contratar? ops...kkkk
      </Paragraph>
      <Form>
        <Input label="Nome ou apelido (você decide)" id="name" />
        <Input label="Email" id="email" />
        <Input label="Mensagem" id="message" type="textarea" />
        <StyledButton variant="secondary" type="submit">
          Enviar mensagem
        </StyledButton>
      </Form>
      <ResponsiveImage src={imgContact} alt="Myself" />
    </>
  );
};

export default Contact;
