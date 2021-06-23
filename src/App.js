import React, { useState, useRef, useMemo, useCallback } from "react";
import Counter from "./container/etc/Counter";
import InputSample from "./container/etc/InputSample";
import UserList from "./container/etc/UserList";
import CreateUser from "./container/etc/CreateUser";
import styled from "styled-components";
import PrTodoTemplate from "./container/pr_todo/PrTodoTemplate";
import PrTodoHead from "./container/pr_todo/PrTodoHead";
import PrTodoList from "./container/pr_todo/PrTodoList";
import PrTodoInput from "./container/pr_todo/PrTodoInput";
import Node from "./container/pr_todo/Node";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      message: "one",
      done: true,
    },
    {
      id: 2,
      message: "two",
      done: true,
    },
    {
      id: 3,
      message: "three",
      done: false,
    },
  ]);
  const [input, setInput] = useState("sdf");

  const handleSubmit = (e, todos, setTodos, input, setInput) => {
    e.preventDefault();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 0;
    setTodos([...todos, { id: id, message: input }]);
    setInput("");
  };

  const deleteNote = (id, todos, setTodos) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, todos, setTodos, input, setInput)}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button>Submit</button>
      </form>
      {todos.map((todo) => (
        <Node message={todo.message} id={todo.id} deleteNote={(id) => deleteNote(id, todos, setTodos)} />
      ))}
    </div>
    // <PrTodoTemplate>
    //   <PrTodoHead />
    //   <PrTodoList todos={todos} />
    //   <PrTodoInput text={text} onChange={onChange} onCreate={onCreate} />
    // </PrTodoTemplate>
  );
}

export default App;
