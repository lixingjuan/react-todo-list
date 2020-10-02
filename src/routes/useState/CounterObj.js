import React, { useState } from "react";

/* setState不会自动更新对象 */
export default function Counter() {
  const initialCountObj = { count: 0 };
  const [countObj, setCountObj] = useState(initialCountObj);

  return (
    <>
      Count: {countObj.count}
      <button onClick={() => setCountObj(initialCountObj)}>Reset</button>
      <button
        onClick={() =>
          setCountObj(prevCount => ({
            ...prevCount,
            count: prevCount.count - 1
          }))
        }
      >
        -
      </button>
      <button
        onClick={() =>
          setCountObj(prevCount => ({
            ...prevCount,
            count: prevCount.count + 1
          }))
        }
      >
        +
      </button>
    </>
  );
}
