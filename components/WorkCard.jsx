import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  width: 90%;

  & img {
    border-radius: 16px;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 70%;
  padding: 10px 20px;
  min-width: 300px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > * {
    background: #ffffff;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.typography.title};
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const Title = styled.h4`
  font-size: 32px;
  font-family: "Playfair Display";
  font-weight: normal;
  text-align: center;
  margin: 5px 0 10px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const WorkCard = ({ img, header, title, children, className }) => {
  return (
    <Wrapper className={className}>
      <ImageWrapper>{img}</ImageWrapper>
      <ContentWrapper>
        <Header>{header}</Header>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </ContentWrapper>
    </Wrapper>
  );
};

export default WorkCard;
