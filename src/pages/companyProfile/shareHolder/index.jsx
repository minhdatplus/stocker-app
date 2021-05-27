import React, { useEffect } from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import ShareHolderTable from '@/pages/companyProfile/shareHolder/shareHolder.table';
import ShareHolderPieChart from '@/pages/companyProfile/shareHolder/shareHolder.pieChart';
import { connect } from 'umi';

const { TabPane } = Tabs;

const ShareHolder = ({ dispatch, recentStock, companyProfile: { listShareHolder } }) => {
  useEffect(() => {
    dispatch({
      type: 'companyProfile/getListShareHolder',
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
            <Tabs>
              <TabPane tab={'Tất cả'} key={1}>
                <ShareHolderTable data={listShareHolder} />
              </TabPane>
              <TabPane tab={'Cá nhân'} key={2}>
                <ShareHolderTable
                  data={listShareHolder && listShareHolder.filter((item) => item.type === 'I')}
                />
              </TabPane>
              <TabPane tab={'Tổ chức'} key={3}>
                <ShareHolderTable
                  data={listShareHolder && listShareHolder.filter((item) => item.type === 'C')}
                />
              </TabPane>
            </Tabs>
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
            <Card bordered={true} title={'Cơ cấu cổ đông'}>
              <ShareHolderPieChart listShareHolder={listShareHolder || []} />
            </Card>
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
}))(ShareHolder);
