import React, { useState, useEffect } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  /* 情况1， useEffect没有参数2 => 每次都会执行 */
  useEffect(() => {
    console.log("useEffect参数二为空执行");
  });

  /* 情况2， useEffect参数2为空数组 => 每次都会执行 */
  useEffect(() => {
    console.log("useEffect参数二为空数组执行");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>点击count+1</button>
    </>
  );
}
