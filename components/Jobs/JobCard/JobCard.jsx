import React from "react";
import {
  ContentWrapper,
  Header,
  ImageWrapper,
  Text,
  Title,
  Wrapper,
} from "./styles";

const JobCard = ({
  imageSrc,
  imageAlt,
  header,
  title,
  children,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <div>
        <ImageWrapper src={imageSrc} alt={imageAlt} />
      </div>
      <ContentWrapper>
        <Header>{header}</Header>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </ContentWrapper>
    </Wrapper>
  );
};

export default JobCard;
