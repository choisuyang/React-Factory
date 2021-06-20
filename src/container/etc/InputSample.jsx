import React, { useState } from "react";

export default function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const onResetButton = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onResetButton}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}
