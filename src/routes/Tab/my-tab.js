import React, { useState, useEffect, useContext } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function Counter() {
  const arr = [
    { title: "title 1", content: "content 1" },
    { title: "title 2", content: "content 2" }
  ];

  return (
    <>
      {arr.map(it => (
        <TabPane tab={it.title} key={it.title}>
          <div>{it.content}</div>
        </TabPane>
      ))}
    </>
  );
}
