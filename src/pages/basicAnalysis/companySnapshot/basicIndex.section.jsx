import React from 'react';
import { Card, Col, Row } from 'antd';
import { Area } from '@ant-design/charts';

const BasicIndexSection = ({ tickerSeries }) => {
  const transformTickerSeries = (item) => ({
    ...item,
    matchPrice: parseFloat((item.matchPrice / 1000.0).toFixed(2)),
    tradingDate: item.tradingDate.split('T')[0],
  });
  const newTickerSeries = tickerSeries ? tickerSeries.map(transformTickerSeries) : [];

  const yAxisConfig = {};

  const xAxisConfig = {};

  return (
    <Card>
      <Row gutter={24}>
        <Col
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          style={{
            marginBottom: 24,
          }}
        >
          <Area
            data={newTickerSeries || []}
            xField={'tradingDate'}
            yField={'matchPrice'}
            areaStyle={() => ({ fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' })}
            yAxis={yAxisConfig}
            xAxis={xAxisConfig}
          />
        </Col>
        <Col
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{
            marginBottom: 24,
          }}
        ></Col>
        <Col
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{
            marginBottom: 24,
          }}
        ></Col>
      </Row>
    </Card>
  );
};

export default BasicIndexSection;
