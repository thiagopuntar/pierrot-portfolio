import Image from "next/image";
import React from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 24px;
`;

const ResponsiveImage = ({ className, priority = false, ...props }) => {
  return <StyledImage className={className} priority={priority} {...props} />;
};

export default ResponsiveImage;
