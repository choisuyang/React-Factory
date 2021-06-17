import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./container/todo/TodoTemplate";
import TodoHead from "./container/todo/TodoHead";
import TodoList from "./container/todo/TodoList";
import TodoCreate from "./container/todo/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
