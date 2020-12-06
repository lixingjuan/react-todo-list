import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Space, Form, Input, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

function Info() {
  const [type, setType] = useState("typeInit");

  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return Modal.info({
    content: (
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            onClick={() => {
              Modal.destroyAll();
            }}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    )
    // onOk() {}
  });
}

function success() {
  Modal.success({
    content: "some messages...some messages..."
  });
}

function error() {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages..."
  });
}

function warning() {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages..."
  });
}

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <Space>
      <Button onClick={() => <Info />}>Info</Button>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </Space>
  );
}
