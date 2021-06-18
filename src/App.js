import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import PrTodoHead from "./container/pr_todo/PrTodoHead";
import PrTodoInput from "./container/pr_todo/PrTodoInput";
import PrTodoList from "./container/pr_todo/PrTodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const initalTodos = [
  {
    id: 1,
    text: "hi",
    done: true,
  },
  {
    id: 2,
    text: "hi2222",
    done: false,
  },
  {
    id: 3,
    text: "hi2333",
    done: true,
  },
];

function App() {
  return <div>test</div>;
}

export default App;

// function App() {
//   const [total, setTotal] = useState(0);
//   const [input, setInput] = useState("");

//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "100vw",
//         height: "100vh",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",

//         // position: "absolute",
//         // top: "50%",
//         // left: "50%",
//         // border: "1px solid black",
//         // transform: "translate(-50%,50%)",
//       }}
//     >
//       <div style={{ border: "1px solid black", width: "400px", height: "700px" }}>
//         <PrTodoHead totalCount={total} />
//         <PrTodoList todos={initalTodos} />
//         <PrTodoInput inputValue={input} onChange={(value) => setInput({ ...input, ...value })} />
//       </div>
//     </div>
//   );
// }
