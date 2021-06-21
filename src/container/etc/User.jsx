import React from "react";

export default function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  return (
    <div>
      <span
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </span>

      <span> ({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}
