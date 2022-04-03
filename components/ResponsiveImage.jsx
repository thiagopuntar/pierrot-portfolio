import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 24px;
`;

const ResponsiveImage = ({
  className,
  src,
  alt,
  height,
  width,
  layout,
  objectFit,
}) => {
  return (
    <StyledImage
      className={className}
      src={src}
      alt={alt}
      height={height}
      width={width}
      layout={layout}
      objectFit={objectFit}
    />
  );
};

export default ResponsiveImage;
