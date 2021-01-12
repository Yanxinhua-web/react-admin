import { Button, Card, Form, Input } from "antd";
import React from "react";
function Edit(props) {
  const handleSubmit = (e) => {
    if (e.errorFields&&e.errorFields[0].errors) {
      console.log(String(e.errorFields[0].errors));
    } else {
      console.log("成功");
    }

  };
  return (
    <Card>
      <Form onFinish={handleSubmit} onFinishFailed={handleSubmit}>
        <Form.Item
          label="名字"
          name="name"
          rules={[{ required: true, message: "请输入商品名字" }]}
        >
          <Input placeholder="请输入商品名字"></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Edit;
