import React from 'react';
import { Col, Row } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import SimplePriceSection from '@/pages/basicAnalysis/companySnapshot/simplePrice.section';
import CompanyRankingSection from '@/pages/basicAnalysis/companySnapshot/companyRanking.section';
import BasicIndexSection from '@/pages/basicAnalysis/companySnapshot/basicIndex.section';
import FinanceReportSection from '@/pages/basicAnalysis/companySnapshot/financeReport.section';

const CompanySnapshot = ({ basicAnalysis, companyProfile }) => {
  const { latestPrice, companyScore, tickerSeries } = basicAnalysis || {};
  const { listFinance } = companyProfile || {};

  const { organCode } = companyScore && companyScore.length > 0 ? companyScore[0] : {};
  const { priceInfo } = latestPrice && latestPrice.length > 0 ? latestPrice[0] : {};

  return (
    <GridContent>
      <React.Fragment>
        <Row
          gutter={24}
          style={{
            height: '80vh',
            overflow: 'auto',
          }}
        >
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
            <h1> {organCode} </h1>
            <SimplePriceSection priceInfo={priceInfo} />
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
            <CompanyRankingSection companyScore={companyScore} />
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
            <BasicIndexSection tickerSeries={tickerSeries} listFinance={listFinance} />
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
            <FinanceReportSection listFinance={listFinance} />
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
};

export default connect(({ loading, basicAnalysis, companyProfile }) => ({
  basicAnalysis,
  companyProfile,
  submitting: loading.effects['login/login'],
}))(CompanySnapshot);
