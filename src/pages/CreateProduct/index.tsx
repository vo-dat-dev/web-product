import BasicProductInformation from '@/pages/CreateProduct/components/BasicProductInformation';
import FillOutSuggestion from '@/pages/CreateProduct/components/FillOutSuggestion';
import PreviewProduct from '@/pages/CreateProduct/components/PreviewProduct';
import { Col, Row } from 'antd';
import React from 'react';

const CreateProduct: React.FC = () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 24]} style={{ padding: '24px' }}>
        <Col span={6}>
          <FillOutSuggestion />
        </Col>
        <Col span={12}>
          <BasicProductInformation />
        </Col>
        <Col span={6}>
          <PreviewProduct />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default CreateProduct;
