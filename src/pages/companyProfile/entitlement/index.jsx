import React from 'react';
import { Col, Row } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import SearchOptionForm from '@/pages/companyProfile/entitlement/searchOption.form';
import ListEntitlementTable from '@/pages/companyProfile/entitlement/listEntitlement.table';
import { connect } from 'umi';

const Entitlement = ({ companyProfile: { listEntitlement }, recentStock }) => {
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
            <SearchOptionForm recentStock={recentStock} />
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
            <ListEntitlementTable data={listEntitlement} />
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
}))(Entitlement);
