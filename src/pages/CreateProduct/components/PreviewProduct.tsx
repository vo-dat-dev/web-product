import {
  ShoppingCartOutlined,
  UserOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, Space, Typography } from 'antd';

const PreviewProduct = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        backgroundColor: '#f0f2f5',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        height: '650px',
      }}
    >
      <Typography>Xem trước sản phẩm</Typography>
      <div
        style={{
          flexGrow: 1,
          overflowY: 'auto',
          scrollbarWidth: 'auto',
          transition: 'all 0.3s ease',
        }}
      >
        <Image
          style={{ width: '100%' }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Typography>0 phân loại có sẵn</Typography>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Typography>Thông tin chi tiết</Typography>
        </div>
      </div>
      <div>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '4px',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Avatar
                size={32}
                icon={<UserOutlined />}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <Typography>0 phân loại có sẵn</Typography>
            </div>
            <Button>Xem</Button>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button icon={<WechatOutlined />} style={{ width: '100%' }} />
            <Button icon={<ShoppingCartOutlined />} style={{ width: '100%' }} />
            <Button style={{ width: '100%' }}>Mua ngay</Button>
          </div>
          <Typography>
            Hình ảnh có tính chất tham khảo, không phải hình ảnh cuối cùng Người
            mua thấy.
          </Typography>
        </Space>
      </div>
    </div>
  );
};
export default PreviewProduct;
