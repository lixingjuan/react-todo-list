import React, { useState } from "react";

function someExpensiveComputation(props) {
  return props.length;
}

export default function Counter() {
  const initProps = "123456789";
  const [count, setCount] = useState(() => {
    return someExpensiveComputation(initProps);
  });

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(someExpensiveComputation(initProps))}>
        Reset
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
