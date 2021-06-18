import React, { useState } from "react";

export default function PrTodoInput({ inputValue }) {
  const [comments, setComments] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setComments({
      value,
    });
    onChange(comments);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
      }}
    >
      <input placeholder="입력하세요" value={inputValue} type="input" onChange={onChange} />
      <button>추가</button>
    </div>
  );
}
