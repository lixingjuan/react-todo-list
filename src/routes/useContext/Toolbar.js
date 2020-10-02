import React from "react";
import ThemedButton from "./ThemedButton";

export default function Toolbar() {
  console.log("ToolbarOne被重新渲染");

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <ThemedButton />
      <ThemedButton />
    </div>
  );
}
