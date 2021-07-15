import React from "react";

export default function ({ totalCount }) {
  const date = new Date();
  const krDay = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const krDayName = date.toLocaleTimeString("ko-KR", {
    weekday: "long",
  });
  console.log("--->", totalCount);

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <div>{krDay}</div>
      <div>{krDayName}</div>
      <div>할 일 {totalCount}개 남음</div>
    </div>
  );
}
