import React, { useState } from "react";
import Counter from "./container/etc/Counter";
import InputSample from "./container/etc/InputSample";

function App() {
  return <InputSample />;
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
