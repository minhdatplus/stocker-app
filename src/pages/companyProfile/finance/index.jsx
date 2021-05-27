import React, { useEffect } from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import FinancialIndicatorsDesc from '@/pages/companyProfile/finance/financialIndicators.desc';
import RevenueTable from '@/pages/companyProfile/finance/revenue.table';
import { connect } from 'umi';

const { TabPane } = Tabs;

const Finance = ({ dispatch, recentStock, companyProfile: { listFinance } }) => {
  let mostRecentYearReport = {};
  let mostRecentYear = 0;
  if (listFinance) {
    listFinance.forEach((item) => {
      const { yearreport } = item;
      if (parseInt(yearreport, 10) > parseInt(mostRecentYear, 10)) {
        mostRecentYear = yearreport;
        mostRecentYearReport = item;
      }
    });
  }

  useEffect(() => {
    dispatch({
      type: 'companyProfile/getListFinance',
      payload: {
        code: recentStock,
      },
    });
  }, [dispatch, recentStock]);

  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
          <Col
            xl={16}
            lg={16}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card bordered={true}>
              <Tabs>
                <TabPane tab={'Doanh thu'} key={1}>
                  <RevenueTable listFinance={listFinance} mostRecentYear={mostRecentYear} />
                </TabPane>
                <TabPane tab={'Lợi nhuận'} key={2}></TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col
            xl={8}
            lg={8}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <FinancialIndicatorsDesc mostRecentYearReport={mostRecentYearReport || {}} />
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
};

export default connect(({ tradingExchange, loading, companyProfile }) => ({
  tradingExchange,
  companyProfile,
  submitting: loading.effects['login/login'],
}))(Finance);
