import React, { useState } from "react";

export default function PrTodoInput({ text, onChange, onCreate }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
      }}
    >
      <input type="text" placeholder="입력하세요" value={text} type="input" onChange={onChange} />
      <button onClick={onCreate}>추가</button>
    </div>
  );
}
