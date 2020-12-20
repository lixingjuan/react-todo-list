import React from "react";
import { Tabs } from "antd";
import TabPaneList from "./my-tab";

const { TabPane } = Tabs;

const arr = [
  { title: "title 1", content: "content 1" },
  { title: "title 2", content: "content 2" }
];

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={() => {}}>
    {/* <TabPaneList TabPane={TabPane} /> */}
    {arr.map(it => (
      <TabPane tab={it.title} key={it.title}>
        <div>{it.content}</div>
      </TabPane>
    ))}
  </Tabs>
);

export default Demo;
