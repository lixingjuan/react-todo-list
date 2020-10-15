import React, { useState, useEffect, useContext } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <div>头</div>
      <div>内容组件</div>
    </>
  );
}
