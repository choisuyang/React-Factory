import React, { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/hello").then((res) => console.log(res));
  }, []);
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
    </div>
  );
}

export default LandingPage;
