import React, { useEffect, useState } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Card, Col, Row, Select, Spin, Tabs } from 'antd';
import SimpleProfile from '@/pages/companyProfile/simpleProfile';
import { connect } from 'umi';
import ShareHolder from '@/pages/companyProfile/shareHolder';
import CapitalAndDividend from '@/pages/companyProfile/capitalAndDividend';
import FinanceNews from '@/pages/companyProfile/financeNews';
import Entitlement from '@/pages/companyProfile/entitlement';
import Statistical from '@/pages/companyProfile/statistical';
import Finance from '@/pages/companyProfile/finance';
import StockPriceChart from '@/pages/companyProfile/stockPriceChart';

const { TabPane } = Tabs;
const { Option } = Select;

const CompanyProfile = ({
  dispatch,
  tradingExchange: { listAllStock },
  companyProfile: { isLoading },
}) => {
  const [recentStock, setRecentStock] = useState(null);
  const [listSearch, setListSearch] = useState([]);

  const handleSearch = (value) => {
    setListSearch(listAllStock.filter((item) => item.code.includes(value)));
  };

  const handleChange = (value) => {
    setRecentStock(value);
  };

  useEffect(() => {
    dispatch({
      type: 'tradingExchange/getAllStock',
    });
  }, [dispatch]);

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
          >
            <Card title={'Chọn Doanh Nghiệp'} bordered={false}>
              <Select
                showSearch
                value={recentStock}
                placeholder={'Chọn mã chứng khoán của công ty bạn muốn xem'}
                style={{ width: 500 }}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChange}
                notFoundContent={null}
              >
                {listSearch.map((d) => (
                  <Option key={d.code} value={d.code}>
                    {d.code} - {d.clientName}
                  </Option>
                ))}
              </Select>
            </Card>
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
            <Card title={'Thông tin doanh nghiệp'} bordered={false}>
              {recentStock ? (
                <Tabs>
                  <TabPane tab={'Hồ sơ'} key={1}>
                    <Spin spinning={isLoading}>
                      <SimpleProfile symbol={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Bảng giá chứng khoán'} key={8}>
                    <Spin spinning={isLoading}>
                      <StockPriceChart recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Cổ đông'} key={2}>
                    <Spin spinning={isLoading}>
                      <ShareHolder recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Vốn và cổ tức'} key={3}>
                    <Spin spinning={isLoading}>
                      <CapitalAndDividend recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Tin tức'} key={4}>
                    <Spin spinning={isLoading}>
                      <FinanceNews recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Lịch sự kiện'} key={5}>
                    <Spin spinning={isLoading}>
                      <Entitlement recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Thống kê'} key={6}>
                    <Spin spinning={isLoading}>
                      <Statistical recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                  <TabPane tab={'Tài chính'} key={7}>
                    <Spin spinning={isLoading}>
                      <Finance recentStock={recentStock} />
                    </Spin>
                  </TabPane>
                </Tabs>
              ) : (
                <small style={{ textAlign: 'center', opacity: 0.5 }}>
                  <p> Vui lòng chọn một doanh nghiệp </p>
                </small>
              )}
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
}))(CompanyProfile);
