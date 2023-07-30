import Link from "next/link";
import React from "react";
import {
  ContentWrapper,
  ImageWrapper,
  Text,
  Title,
  Wrapper,
  StyledButton,
} from "./styles";
import ResponsiveImage from "../../../ResponsiveImage";

const JobCard = ({ imageSrc, imageAlt, title, href, children, className }) => {
  return (
    <Wrapper className={className}>
      <ImageWrapper>
        <ResponsiveImage
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <ContentWrapper>
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
