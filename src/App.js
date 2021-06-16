import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./container/todo/TodoTemplate";
import TodoHead from "./container/todo/TodoHead";
import TodoList from "./container/todo/TodoList";
import TodoCreate from "./container/todo/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
