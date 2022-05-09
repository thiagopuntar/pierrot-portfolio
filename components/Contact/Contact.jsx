import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import Container from "../Container";
import Input from "./Input";
import {
  H1,
  Paragraph,
  Form,
  StyledButton,
  ContactWrapper,
  FormWrapper,
  ImageWrapper,
} from "./styles";
import imgContact from "../../public/img/contact/me.png";

const Contact = () => {
  return (
    <Container>
      <ContactWrapper>
        <FormWrapper>
          <H1>Vamos Conversar?</H1>
          <Paragraph>
            Tem alguma dúvida? Quer bater um papo? Quer me contratar? ops...kkkk
          </Paragraph>
          <Form>
            <Input label="Nome ou apelido (você decide)" id="name" />
            <Input label="Email" id="email" />
            <Input
              label="Mensagem, dúvida, idéia ou simplesmente crítica, pode mandar...."
              id="message"
              type="textarea"
            />
            <StyledButton variant="secondary" type="submit">
              Enviar mensagem
            </StyledButton>
          </Form>
        </FormWrapper>
        <ImageWrapper>
          <ResponsiveImage src={imgContact} alt="Myself" />
        </ImageWrapper>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
