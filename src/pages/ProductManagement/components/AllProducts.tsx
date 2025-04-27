import React from 'react';

import type { TableProps } from 'antd';
import { Space, Table } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Sales Volume',
    dataIndex: 'sales',
    key: 'sales',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Inventory',
    dataIndex: 'inventory',
    key: 'inventory',
  },
  {
    title: 'Content Quality',
    dataIndex: 'quality',
    key: 'quality',
  },
  {
    title: 'Actions',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [];

const AllProducts: React.FC = () => {
  return <Table<DataType> columns={columns} dataSource={data} />;
};
export default AllProducts;
