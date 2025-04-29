import React from 'react';

import BasicProductInformation from '@/pages/CreateProduct/components/BasicProductInformation';
import FillOutSuggestion from '@/pages/CreateProduct/components/FillOutSuggestion';
import PreviewProduct from '@/pages/CreateProduct/components/PreviewProduct';
import type { TabsProps } from 'antd';
import { Col, Form, Row, Tabs } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: <BasicProductInformation />,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'tab2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'tab3',
  },
];

const CreateProduct: React.FC = () => {
  return (
    <React.Fragment>
      <Row gutter={[8, 16]}>
        <Col span={6}>
          <FillOutSuggestion />
        </Col>
        <Col span={12}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            destroyInactiveTabPane={true}
          />
          <Form></Form>
        </Col>
        <Col span={6}>
          <PreviewProduct />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default CreateProduct;
