/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 22:36:01
 * @copyright: Copyright (c) 2019, Hand
 */
import React, { Component } from "react";

export default class TodoItems extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { itemsProps } = this.props;

    return (
      <div>
        <ul>
          {itemsProps.map(item => {
            return <li key={item.uuid}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}
