import React from "react";
import { Paragraph, Title, TopBorder, Wrapper } from "./styles";

const Card = ({ title, children, className }) => {
  return (
    <Wrapper className={className}>
      <Title>
        <TopBorder />
        {title}
      </Title>
      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
};

export default Card;
