import React from 'react';
import { Card, Col, List, Row, Typography } from 'antd';
import { FormattedNumber } from 'umi';

const FinancialIndicatorsDesc = ({ mostRecentYearReport }) => {
  const {
    eps,
    dilutedeps,
    pe,
    dilutedpe,
    pb,
    roe,
    roa,
    roic,
    grossprofitmargin,
    netprofitmargin,
    debtequity,
    debtasset,
    quickratio,
    currentratio,
  } = mostRecentYearReport;

  const financeIndicator = [
    {
      name: 'EPS',
      value: <FormattedNumber value={(parseFloat(eps) || 0).toFixed(2)} />,
    },
    {
      name: 'EPS pha loãng',
      value: <FormattedNumber value={(parseFloat(dilutedeps) || 0).toFixed(2)} />,
    },
    {
      name: 'PE',
      value: <FormattedNumber value={(parseFloat(pe) || 0).toFixed(2)} />,
    },
    {
      name: 'PE pha loãng',
      value: <FormattedNumber value={(parseFloat(dilutedpe) || 0).toFixed(2)} />,
    },
    {
      name: 'PB',
      value: <FormattedNumber value={(parseFloat(pb) || 0).toFixed(2)} />,
    },
  ];

  const profitability = [
    {
      name: 'ROE',
      value: (
        <span>
          <FormattedNumber value={(parseFloat(roe) * 100 || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'ROA',
      value: (
        <span>
          <FormattedNumber value={(parseFloat(roa) * 100 || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'ROIC',
      value: (
        <span>
          {' '}
          <FormattedNumber value={(parseFloat(roic) * 100 || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'Tỷ suất LN gộp',
      value: (
        <span>
          {' '}
          <FormattedNumber value={(parseFloat(grossprofitmargin) * 100 || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'Biên LN ròng',
      value: (
        <span>
          {' '}
          <FormattedNumber value={(parseFloat(netprofitmargin) * 100 || 0).toFixed(2)} /> %
        </span>
      ),
    },
  ];

  const financeStrength = [
    {
      name: 'Tổng nợ/VCSH',
      value: (
        <span>
          <FormattedNumber value={(parseFloat(debtequity) || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'Tổng nợ/Tổng TS',
      value: (
        <span>
          <FormattedNumber value={(parseFloat(debtasset) || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'Thanh toán nhanh',
      value: (
        <span>
          {' '}
          <FormattedNumber value={(parseFloat(quickratio) || 0).toFixed(2)} /> %
        </span>
      ),
    },
    {
      name: 'Thanh toán hiện hành',
      value: (
        <span>
          {' '}
          <FormattedNumber value={(parseFloat(currentratio) || 0).toFixed(2)} /> %
        </span>
      ),
    },
  ];

  return (
    <Card bordered={true} title={'Chỉ tiêu tài chính'}>
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
          <h3> Định giá </h3>
          <List
            dataSource={financeIndicator}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text> {item.name} </Typography.Text>
                <Typography.Text style={{ float: 'right' }}> {item.value} </Typography.Text>
              </List.Item>
            )}
          />
        </Col>
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
          <h3> Khả năng sinh lời </h3>
          <List
            dataSource={profitability}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text> {item.name} </Typography.Text>
                <Typography.Text style={{ float: 'right' }}> {item.value} </Typography.Text>
              </List.Item>
            )}
          />
        </Col>
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
          <h3>Sức mạnh tài chính </h3>
          <List
            dataSource={financeStrength}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text> {item.name} </Typography.Text>
                <Typography.Text style={{ float: 'right' }}> {item.value} </Typography.Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default FinancialIndicatorsDesc;
