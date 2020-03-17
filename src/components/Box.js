import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
  border-radius: 0.1875rem;
`;

const Box = ({ children }) => <Container>{children}</Container>;

export default Box;