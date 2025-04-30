import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const ShippingInformation: React.FC = () => {
  const [isAllow, setIsAllow] = useState<boolean>(false);
  useEffect(() => {
    setIsAllow(true);
  }, []);
  return (
    <Space direction="vertical" size="large">
      <Typography>Vận chuyển</Typography>
      {isAllow && (
        <Typography>Có thể điều chỉnh sau khi chọn ngành hàng</Typography>
      )}
    </Space>
  );
};

export default ShippingInformation;
