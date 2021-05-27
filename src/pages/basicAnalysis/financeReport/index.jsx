import React from 'react';
import { Col, Row } from 'antd';
import { GridContent } from '@ant-design/pro-layout';

const FinanceReport = () => {
  return (
    <GridContent>
      <React.Fragment>
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
          ></Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
};

export default FinanceReport;
