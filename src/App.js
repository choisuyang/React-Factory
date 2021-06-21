import React, { useState, useRef } from "react";
import Counter from "./container/etc/Counter";
import InputSample from "./container/etc/InputSample";
import UserList from "./container/etc/UserList";
import CreateUser from "./container/etc/CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "one",
      email: "one@test.com",
    },
    {
      id: 2,
      username: "two",
      email: "two@test.com",
    },
    {
      id: 3,
      username: "three",
      email: "three@test.com",
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser onChange={onChange} username={username} email={email} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
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
