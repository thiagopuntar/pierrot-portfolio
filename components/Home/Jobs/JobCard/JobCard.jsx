import Link from "next/link";
import React from "react";
import {
  ContentWrapper,
  Header,
  ImageWrapper,
  Text,
  Title,
  Wrapper,
  StyledButton,
  StyledImage,
} from "./styles";

const JobCard = ({
  imageSrc,
  imageAlt,
  header,
  title,
  href,
  children,
  align,
  className,
}) => {
  return (
    <Wrapper className={className} align={align}>
      <ImageWrapper align={align}>
        <StyledImage src={imageSrc} alt={imageAlt} />
      </ImageWrapper>
      <ContentWrapper align={align}>
        <Header>{header}</Header>
        <Title>{title}</Title>
        <Text>{children}</Text>
        <Link href={href} passHref>
          <StyledButton color="primary">Veja o Trabalho</StyledButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default JobCard;
