import React, { useContext } from "react";
import { ProviderContext } from "./Hooks";

export default function ThemedButton() {
  // 在嵌套的任意组件，使用useContext，即可共享 Context
  const { state, dispatch } = useContext(ProviderContext);
  console.log("ce", useContext(ProviderContext));

  return (
    <div style={{ width: "200px", height: "300px", ...state.theme }}>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        切换主题
      </button>
    </div>
  );
}
