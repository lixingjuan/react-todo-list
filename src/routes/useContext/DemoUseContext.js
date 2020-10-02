import React, { useContext } from "react";
import { ProviderContext } from "./Hooks";

export default function DemoUseContext() {
  const { state } = useContext(ProviderContext);

  console.log("DemoUseContext被重新渲染");
  console.log({ state });

  return (
    <div>该组件仅用来测试，context改变，是否会触发所有子组件的重新渲染</div>
  );
}
