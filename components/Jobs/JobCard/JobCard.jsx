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
} from "./styles";

const JobCard = ({
  imageSrc,
  imageAlt,
  header,
  title,
  href,
  children,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <ImageWrapper src={imageSrc} alt={imageAlt} />
      <ContentWrapper>
        <Header>{header}</Header>
        <Title>{title}</Title>
        <Text>{children}</Text>
        <Link href={href}>
          <a variant="secondary">
            <StyledButton variant="secondary">Veja o Trabalho</StyledButton>
          </a>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default JobCard;
