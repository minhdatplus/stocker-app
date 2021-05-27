import React, { useEffect } from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import StatisticalSearchOptionForm from '@/pages/companyProfile/statistical/statisticalSearchOption.form';
import SupplyDemandTable from '@/pages/companyProfile/statistical/supplyDemand.table';
import PriceHistoryTable from '@/pages/companyProfile/statistical/priceHistory.table';
import ForeignTradingTable from '@/pages/companyProfile/statistical/foreignTrading.table';
import { connect } from 'umi';

const { TabPane } = Tabs;

const Statistical = ({ dispatch, recentStock, companyProfile: { listStatistical } }) => {
  useEffect(() => {
    dispatch({
      type: 'companyProfile/getListStatistical',
      payload: {
        code: recentStock,
      },
    });
  }, [dispatch, recentStock]);

  return (
    <div>
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
          <StatisticalSearchOptionForm recentStock={recentStock} />
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
          <Card bordered={true}>
            <Tabs>
              <TabPane tab={'Lịch sử giá'} key={1}>
                <PriceHistoryTable data={listStatistical} />
              </TabPane>
              <TabPane tab={'Giao dịch NN'} key={2}>
                <ForeignTradingTable data={listStatistical} />
              </TabPane>
              <TabPane tab={'Cung cầu'} key={3}>
                <SupplyDemandTable data={listStatistical} />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ tradingExchange, loading, companyProfile }) => ({
  tradingExchange,
  companyProfile,
  submitting: loading.effects['login/login'],
}))(Statistical);
