import React from "react";
import styled from "styled-components";
import Contact from "../components/Contact";

const Main = styled.main`
  padding: 1.5rem;
`;

const contact = () => {
  return (
    <Main>
      <Contact />
    </Main>
  );
};

export default contact;
