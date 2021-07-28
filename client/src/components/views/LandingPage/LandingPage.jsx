import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/hello").then((res) => console.log(res));
  }, []);
  const onClickHandler = () => {
    axios.get("http://localhost:5000/api/users/logout").then((response) => {
      console.log("===logout", response.data);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        widows: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>
      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
}

export default LandingPage;
