import React, { useState, useRef, useMemo, useCallback } from "react";
import Counter from "./container/etc/Counter";
import InputSample from "./container/etc/InputSample";
import UserList from "./container/etc/UserList";
import CreateUser from "./container/etc/CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "one",
      email: "one@test.com",
      active: true,
    },
    {
      id: 2,
      username: "two",
      email: "two@test.com",
      active: false,
    },
    {
      id: 3,
      username: "three",
      email: "three@test.com",
      active: false,
    },
  ]);

  const onToggle = useCallback((id) => {
    setUsers((user) => users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  }, []);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser onChange={onChange} username={username} email={email} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
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
