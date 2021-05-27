import React, { useEffect } from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import CompanySnapshot from '@/pages/basicAnalysis/companySnapshot';
import { connect } from 'umi';

const { TabPane } = Tabs;

const BasicAnalysis = ({ dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'basicAnalysis/getCompanyScore',
      payload: {
        code: 'recentStock',
      },
    });

    dispatch({
      type: 'basicAnalysis/getLatestPrice',
      payload: {
        code: 'recentStock',
      },
    });
    dispatch({
      type: 'basicAnalysis/getTickerSeries',
      payload: {
        code: 'recentStock',
      },
    });
    dispatch({
      type: 'companyProfile/getListFinance',
      payload: {
        code: 'recentStock',
      },
    });
  }, [dispatch]);

  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
          <Col
            xl={15}
            lg={15}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card>
              <Tabs>
                <TabPane tab={'Báo cáo tài chính'} key={1}></TabPane>

                <TabPane tab={'Cổ tức và Dự báo'} key={2}></TabPane>

                <TabPane tab={'Chỉ số Tài Chính'} key={3}></TabPane>
              </Tabs>
            </Card>
          </Col>

          <Col
            xl={9}
            lg={9}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card>
              <Tabs>
                <TabPane tab={'Doanh nghiệp'} key={1}>
                  <CompanySnapshot />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
};

export default connect(({ loading, basicAnalysis }) => ({
  basicAnalysis,
  submitting: loading.effects['login/login'],
}))(BasicAnalysis);
