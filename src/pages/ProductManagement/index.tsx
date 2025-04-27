import ActiveProduct from '@/pages/ProductManagement/components/ActiveProduct';
import AllProducts from '@/pages/ProductManagement/components/AllProducts';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: <AllProducts />,
  },
  {
    key: '2',
    label: 'Active (0)',
    children: <ActiveProduct />,
  },
  {
    key: '3',
    label: 'Violations (0)',
    children: 'Content of Violations Tab',
  },
  {
    key: '4',
    label: 'Pending Approval by Shopee (0)',
    children: 'Content of Pending Approval by Shopee Tab',
  },
  {
    key: '5',
    label: 'Not Yet Posted (0)',
    children: 'Content of Not Yet Posted Tab',
  },
];

const ProductManagement: React.FC = () => {
  // eslint-disable-next-line react/jsx-no-undef
  return (
    <React.Fragment>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </React.Fragment>
  );
};
export default ProductManagement;
