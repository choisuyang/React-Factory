import React from "react";
import PrTodoItem from "./PrTodoItem";

export default function PrTodoList({ todos }) {
  console.log("todos", todos);
  return (
    <div style={{ padding: "10px" }}>
      {todos.map((todo) => (
        <PrTodoItem key={todo.id} id={todo.id} done={todo.done} text={todo.text} />
      ))}
    </div>
  );
}
