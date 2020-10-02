import React from "react";

import CounterObj from "./CounterObj";
import CounterString from "./CounterString";
import CounterLazy from "./CounterLazy";
import { NoteList } from "../../components";

// export default function Counter() {
//   const initialCount = 0;
//   const [count, setCount] = useState(initialCount);

//   return (
//     <>
//       Count: {count}
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//       {/* 如果新的state依赖前一个state的值，则可以将函数传递给state, 此函数接受先前的state, 返回更新的state */}
//       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//     </>
//   );
// }

/* setState不会自动更新对象 */
export default function Counter() {
  const blockquoteAll = [
    `??调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。（React 使用 Object.is 比较算法 来比较 state。）
    (这是什么意思？), 是说 只要Object.is判定state 为true, 就不会触发子组件的render 么？`
  ];

  const blockquoteString =
    "如果新的state依赖前一个state的值，则可以将函数传递给state, 此函数接受先前的state, 返回更新的state";

  const blockquoteObj = [
    "setState 不会自动更新对象, 可以通过 setCountObj(prev=> ({ ...prev, ...newValue })) 方式实现更新",
    "useReducer 是另一个可选方案，它更适合管理包含多个子值的state对象"
  ];

  const blockquoteLazy = [
    "initialState只会在组件初始化渲染的时候起作用， 后续渲染时会被忽略",
    "如果初始state需要通过复杂的运算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用"
  ];

  return (
    <>
      <NoteList NoteList={blockquoteAll} />

      <div>
        <h3>stateState更新string</h3>
        <NoteList NoteList={blockquoteString} />
        <CounterString />
      </div>

      <div>
        <h3>stateState更新对象</h3>
        <NoteList NoteList={blockquoteObj} />
        <CounterObj />
      </div>

      <div>
        <h3>惰性初始 state</h3>
        <NoteList NoteList={blockquoteLazy} />
        <CounterLazy />
      </div>
    </>
  );
}
