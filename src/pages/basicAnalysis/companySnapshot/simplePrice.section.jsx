import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, SwapRightOutlined } from '@ant-design/icons';

const SimplePriceSection = ({ priceInfo }) => {
  const { matchPrice, priceChange, percentPriceChange } = priceInfo || {};

  let color = 'yellow';
  if (priceChange > 0) color = 'green';
  else if (priceChange < 0) color = 'red';

  let icon = <SwapRightOutlined />;
  if (priceChange > 0) icon = <ArrowUpOutlined />;
  else if (priceChange < 0) icon = <ArrowDownOutlined />;

  return (
    <Row gutter={24}>
      <Col
        xl={12}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card>
          <Statistic
            title="Giá"
            value={matchPrice / 1000}
            precision={2}
            valueStyle={{ color, fontSize: 15 }}
            suffix={<small> VNĐ </small>}
          />
        </Card>
      </Col>
      <Col
        xl={12}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card>
          <Statistic
            title="Giảm/ Tăng"
            value={priceChange / 1000}
            precision={2}
            valueStyle={{ color, fontSize: 12 }}
            formatter={(value) =>
              `${value} (${(parseFloat(percentPriceChange) * 100.0).toFixed(2)} %)`
            }
            prefix={icon}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default SimplePriceSection;
