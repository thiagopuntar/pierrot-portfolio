import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const ResponsiveImage = ({ className, src, alt }) => {
  return <StyledImage className={className} src={src} alt={alt} />;
};

export default ResponsiveImage;
