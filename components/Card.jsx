import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 31px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  padding: 30px 10px 10px 10px;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(105%);
  }
`;

const TopBorder = styled.div`
  border-top: 4px solid ${(props) => props.theme.colors.secondary};
  width: 30%;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  background: #ffffff;
  font-family: "Playfair display";
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
`;

const Paragraph = styled.p`
  background: #ffffff;
  padding: 5px;
  font-size: 14px;
`;

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
