import ActiveProduct from '@/pages/ProductManagement/components/ActiveProduct';
import AllProducts from '@/pages/ProductManagement/components/AllProducts';
import { Tabs, TabsProps } from 'antd';
import React from 'react';
import { connect } from 'umi';

const ProductManagement: React.FC<{ products: any; dispatch: any }> = ({
  products,
  dispatch,
}) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'All',
      children: <AllProducts />,
    },
    {
      key: '2',
      label: `Active`,
      children: <ActiveProduct />,
    },
    {
      key: '3',
      label: `Violations`,
      children: 'Content of Violations Tab',
    },
    {
      key: '4',
      label: `Pending Approval by Shopee`,
      children: 'Content of Pending Approval by Shopee Tab',
    },
    {
      key: '5',
      label: `Not Yet Posted`,
      children: 'Content of Not Yet Posted Tab',
    },
  ];
  console.log(products);
  console.log(dispatch);

  return (
    <React.Fragment>
      <Tabs defaultActiveKey="1" items={items} />
    </React.Fragment>
  );
};

export default connect(({ productManagement }: any) => ({
  products: productManagement.products,
}))(ProductManagement);
