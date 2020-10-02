import React from "react";

import CounterString from "./CounterString";
import { NoteList } from "../../components";

/* setState不会自动更新对象 */
export default function Counter() {
  const NoteArr = [
    "useState的替代方案，接收形如 (state, action) => newState 的reducer, 并返回当前的state，以及与之配套的dispatch",
    "在某些场景下，useReducer比useState 更适应，例如state逻辑较为复杂或者包含多个子值，或者下一个state依赖之前的state等",
    "并且，使用useReducer还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递dispatch而不是回调函数"
  ];

  return (
    <>
      <h1>使用useReducer实现计数器</h1>
      <NoteList NoteList={NoteArr} />
      <CounterString />
    </>
  );
}
