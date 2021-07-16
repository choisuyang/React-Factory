import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    passwordCheck: "",
  });
  const { email, name, password, passwordCheck } = inputs;

  const onChangeHandler = (e) => {
    // console.log("---<", { target: { value } });
    // console.log("---<sdf", value);
    // console.log("---<sdfsdfasdf", name);
    const { name, value } = e.target;
    console.log("0000", value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return alert("비밀번호와 비밀번호 확인은 같아야합니다.");
    }
    dispatch(registerUser({ email, name, password, passwordCheck })).then((response) => {
      console.log("---->", response.payload);
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("회원가입이 진행이 안됬습니다.");
      }
    });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChangeHandler} />
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={onChangeHandler} />
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChangeHandler} />
        <label>Password-Check</label>
        <input type="password" name="passwordCheck" value={passwordCheck} onChange={onChangeHandler} />
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default RegisterPage;
