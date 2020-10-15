import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

import Routes from "./router";
import AuthorizedContextCintainer from "./hooks/AuthorizedContextCintainer";

import "./App.css";

const { SubMenu } = Menu;

export default function App() {
  return (
    <AuthorizedContextCintainer>
      <Routes />
    </AuthorizedContextCintainer>
  );
}
