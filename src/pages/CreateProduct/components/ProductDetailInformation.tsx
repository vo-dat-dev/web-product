import UploadImage from '@/pages/CreateProduct/components/UploadImage';
import { Form, Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

const ProductDetailInformation: React.FC = (props: any) => {
  const {} = props;
  return (
    <React.Fragment>
      <Form
        name="trigger"
        style={{ maxWidth: 600 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item hasFeedback label="Hình ảnh sản phẩm" name="product_image">
          <UploadImage />
        </Form.Item>
        <Form.Item hasFeedback label="Ảnh bìa" name="product_background">
          <UploadImage />
        </Form.Item>
        <Form.Item hasFeedback label="Tên sản phẩm" name="name">
          <Input placeholder="Tên sản phẩm" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Mô tả sản phẩm"
          name="description"
          rules={[{ max: 3 }]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};
export default ProductDetailInformation;
