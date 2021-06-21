import React from "react";

export default function User({ user, onRemove }) {
  const { username, email, id } = user;
  console.log("--->", onRemove);
  console.log("id", id);
  return (
    <div>
      <span>{username}</span>

      <span> ({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}
