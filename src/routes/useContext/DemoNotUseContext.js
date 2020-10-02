import React from "react";

export default function Demo() {
  console.log("Demo被重新渲染");

  return (
    <div>该组件仅用来测试，context改变，是否会触发所有子组件的重新渲染</div>
  );
}
