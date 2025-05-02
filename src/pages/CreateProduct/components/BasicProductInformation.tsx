import ProductDetailInformation from '@/pages/CreateProduct/components/ProductDetailInformation';
import PurchaseInformation from '@/pages/CreateProduct/components/PurchaseInformation';
import ShippingInformation from '@/pages/CreateProduct/components/ShippingInformation';
import { Affix, Button, Space, TabPaneProps, Tabs } from 'antd';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { connect } from 'umi';
import { hashString } from '@umijs/preset-umi/dist/features/ssr/builder/css-loader';

// Base Tab interface
export interface Tab extends Omit<TabPaneProps, 'tab'> {
  key: string;
  label: React.ReactNode;
}

// Customized Tab interface
interface CustomTab extends Tab {
  component?: React.ReactNode;
}

const items: CustomTab[] = [
  {
    label: 'Thông tin cơ bản',
    key: '1',
    component: <ProductDetailInformation />,
  },
  {
    label: 'Thông tin bán hàng',
    key: '2',
    component: <PurchaseInformation />,
  },
  {
    label: 'Vận chuyển',
    key: '3',
    component: <ShippingInformation />,
  },
];
const BasicProductInformation: React.FC<{dispatch: any}> = ( {dispatch}) => {
  const storageRef: MutableRefObject<Record<string, HTMLDivElement | null>> =
    useRef({});
  const scrollToItem = (key: string) => {
    const element = storageRef.current[key];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const [bottom, setBottom] = React.useState<number>(0);

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={scrollToItem}
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
        }}
      />
      <div
        style={{
          flex: 1, // Chiếm phần còn lại
          overflowY: 'auto', // Chỉ cuộn trong khu vực này
          scrollbarWidth: 'none',
        }}
      >
        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          {items.map((item: CustomTab) => {
            return (
              <div
                style={{
                  padding: '16px',
                  backgroundColor: '#f0f2f5',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
                key={item.key}
                ref={(el) => (storageRef.current[item.key] = el)}
              >
                {item.component}
              </div>
            );
          })}
        </Space>
      </div>
      <Affix offsetBottom={bottom}>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', gap: '8px' }}
        >
          <Button type="primary">Hủy</Button>
          <Button type="primary">Lưu và ẩn</Button>
          <Button type="primary">Lưu và hiển thị</Button>
        </div>
      </Affix>
    </div>
  );
};
export default connect(({ createProduct }: any) => ({
  requirements: createProduct.requirements,
}))(BasicProductInformation);
