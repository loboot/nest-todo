
import { Button, Checkbox, Divider, Form, Input, Layout, notification, Typography } from 'antd';
import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    notification.success({
      message: '登录成功',
      description: '欢迎回来！',
    });
  };

  return (
    <Layout className="layout">
      <Layout.Content style={{ padding: '50px' }}>
        <Typography.Title level={2}>登录</Typography.Title>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <Typography.Text>
          
          还没有账号？<Link href="/register">注册</Link>
        </Typography.Text>
      </Layout.Content>
    </Layout>
  );
}