/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-06 16:41:15
 * @copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from "react";

export default class extends Component {
  handleToTodoList() {
    this.$router.push("/TodoList");
  }

  render() {
    return <button on-click="handleToTodoList">去todoList页面</button>;
  }
}
