import { CheckCircleTwoTone } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

// Define interface for requirement items
interface RequirementItem {
  name: string;
  completed?: boolean;
}

const items: RequirementItem[] = [
  { name: 'Thêm ít nhất 3 hình ảnh', completed: false },
  { name: 'Thêm video sản phẩm', completed: false },
  { name: 'Tên sản phẩm có ít nhất 25~100 kí tự', completed: false },
  {
    name: 'Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm',
    completed: true,
  },
  { name: 'Thêm thương hiệu', completed: false },
];

const FillOutSuggestion: React.FC = () => {
  return (
    <div
      style={{
        padding: '8px',
        backgroundColor: '#f0f2f5',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        // padding: '32px'
      }}
    >
      <Space direction="vertical">
        <Typography>Gợi ý điền Thông tin</Typography>
        {items.map((item: RequirementItem, index: number) => (
          <Space
            direction="horizontal"
            align={'center'}
            key={index}
            style={{ width: '100%' }}
          >
            <CheckCircleTwoTone
              twoToneColor={item.completed ? '#52c41a' : '#808080'}
            />
            <Text>{item.name}</Text>
          </Space>
        ))}
      </Space>
    </div>
  );
};

export default FillOutSuggestion;
