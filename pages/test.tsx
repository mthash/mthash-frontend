import * as React from "react";
import styled from "styled-components";

const Test = () => {
  return <Wrapper>Test page</Wrapper>;
};

export default Test;

const Wrapper = styled.div`
  color: ${p => p.theme.palette.mainColor};
`;
