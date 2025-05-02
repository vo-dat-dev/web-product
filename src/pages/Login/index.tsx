import { authentication } from '@/services/authentication/AuthenticationController';
import { Button, Checkbox, Form, FormProps, Input, message } from 'antd';
import React from 'react';
import { history } from 'umi';
import { ResponseError } from 'umi-request';
// import { logger } from '@umijs/utils';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    authentication(values)
      .then((response: any) => {
        history.push('/home')
        messageApi.success('Đăng nhập thành công').then((r) => logger.error(r));
        logger.info(response)
      })
      .catch((error: ResponseError) => {
        console.log('calling error', error);
        messageApi.error(error.message).then((r) => logger.error(r));
      })
      .finally(() => {});
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {contextHolder}
      <Form
        layout="vertical"
        name="basic"
        style={{
          width: '100%',
          maxWidth: 300,
          borderWidth: '1px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          padding: 12,
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          style={{ width: '100%' }}
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          style={{ width: '100%' }}
        >
          <Input.Password style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
          style={{ width: '100%' }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null} style={{ width: '100%' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
