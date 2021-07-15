import React from "react";
import { MdDone, MdDelete } from "react-icons/md";

export default function PrTodoItem({ id, text, done }) {
  const contianerCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={contianerCss}>
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "16px",
          border: "1px solid #ced4da",
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <MdDone />
      </div>

      <div style={{ flex: 1, fontSize: "21px", color: "#495057", marginLeft: "10px" }}>{text}</div>
      <div>
        <MdDelete />
      </div>
    </div>
  );
}
