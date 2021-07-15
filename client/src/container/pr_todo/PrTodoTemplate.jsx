import React, { Children } from "react";
import styled from "styled-components";
const Container = styled.div`
  background: #a3fefa;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoBox = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  border: 2px solid purple;
`;

function PrTodoTemplate({ children }) {
  return (
    <Container>
      <TodoBox>{children}</TodoBox>
    </Container>
  );
}

export default PrTodoTemplate;
