import { CheckCircleTwoTone } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import React from 'react';
import { connect } from 'umi';

const { Text } = Typography;

// Define interface for requirement items
export interface RequirementItem {
  name: string;
  completed?: boolean;
}

const FillOutSuggestion: React.FC<{ requirements: RequirementItem[] }> = ({
  requirements,
}: {
  requirements: RequirementItem[];
}) => {
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
        {requirements.map((item: RequirementItem, index: number) => (
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

export default connect(({ createProduct }: any) => ({
  requirements: createProduct.requirements,
}))(FillOutSuggestion);
