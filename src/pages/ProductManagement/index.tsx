import ActiveProduct from '@/pages/ProductManagement/components/ActiveProduct';
import AllProducts from '@/pages/ProductManagement/components/AllProducts';
import { PlusCircleFilled } from '@ant-design/icons';
import { useNavigate } from '@umijs/max';
import { Button, Space, Tabs, TabsProps, Typography } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'umi';

const ProductManagement: React.FC<{ products: any; dispatch: any }> = ({
  products,
  dispatch,
}) => {
  const navigate = useNavigate();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'All',
      children: <AllProducts />,
    },
    {
      key: '2',
      label: 'Active',
      children: <ActiveProduct />,
    },
    {
      key: '3',
      label: 'Violations',
      children: 'Content of Violations Tab',
    },
    {
      key: '4',
      label: 'Pending Approval by Shopee',
      children: 'Content of Pending Approval by Shopee Tab',
    },
    {
      key: '5',
      label: 'Not Yet Posted',
      children: 'Content of Not Yet Posted Tab',
    },
  ];

  useEffect(() => {
    dispatch({
      type: 'productManagement/getProducts',
      payload: {},
    });
  }, []);

  return (
    <React.Fragment>
      <Space
        align="center"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
          Product
        </Typography>
        <Button
          icon={<PlusCircleFilled />}
          onClick={() => navigate('/product/new')}
        >
          Add Product
        </Button>
      </Space>
      <Tabs defaultActiveKey="1" items={items} />
    </React.Fragment>
  );
};

export default connect(({ productManagement }: any) => ({
  products: productManagement.products,
}))(ProductManagement);
