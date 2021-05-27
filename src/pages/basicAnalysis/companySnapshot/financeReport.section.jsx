import React from 'react';
import { Card, Col, Row } from 'antd';
import { DualAxes } from '@ant-design/charts';

const FinanceReportSection = ({ listFinance }) => {
  const transformListFinance = ({ revenue, profit, ...rest }) => ({
    ...rest,
    revenue: parseFloat((revenue / 1000000000.0).toFixed(2)),
    profit: parseFloat((profit / 1000000000.0).toFixed(2)),
  });

  const newListFinance = listFinance
    ? listFinance.filter((item) => item.lengthreport === '5').map(transformListFinance)
    : [];

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
          <DualAxes
            data={[newListFinance || [], newListFinance || []]}
            xField={'yearreport'}
            yField={['revenue', 'profit']}
            geometryOptions={[
              {
                geometry: 'column',
              },
              {
                geometry: 'line',
                lineStyle: { lineWidth: 2 },
              },
            ]}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default FinanceReportSection;
