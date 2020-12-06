import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import zh_CN from "antd/lib/locale-provider/zh_CN";

import "./App.css";
import "./App.less";
import Routes from "./router";
import AuthorizedContextCintainer from "./hooks/AuthorizedContextCintainer";

const { SubMenu } = Menu;

export default function App() {
  console.log(this);
  return (
    <AuthorizedContextCintainer locale={zh_CN}>
      <div>头</div>
      <Routes />
    </AuthorizedContextCintainer>
  );
}
