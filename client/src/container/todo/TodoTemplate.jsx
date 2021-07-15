import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position : relative;
  background: white;
  border-radius: 20px;
  box-shadow: 1px 2px 6px black;
  padding 10px;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;


export default function TodoTemplate({children}) {
  return (
    <TodoTemplateBlock>{children}</TodoTemplateBlock>
  )
}