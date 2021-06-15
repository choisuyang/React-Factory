import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './container/todo/TodoTemplate';
import TodoHead from './container/todo/TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`; 


function App() {
  return (
    <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead/>
    </TodoTemplate>
    </>
  );
}

export default App;
