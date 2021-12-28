import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & img {
    border-radius: 25px;
  }
`;

const ImageWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default ImageWrapper;
