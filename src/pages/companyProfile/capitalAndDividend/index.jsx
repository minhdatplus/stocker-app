import React, { useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Card, Col, Row } from 'antd';
import { Column } from '@ant-design/charts';
import { connect } from 'umi';

const CapitalAndDividend = ({
  recentStock,
  dispatch,
  companyProfile: { listCapitalAndDividend },
}) => {
  const { tabcapitaldividendresponse } = listCapitalAndDividend || {};
  const { datagroup } = tabcapitaldividendresponse || {};
  const { assetlistList, cashdividendlistList, ownercapitallistList } = datagroup || {
    assetlistList: [],
    cashdividendlistList: [],
    ownercapitallistList: [],
  };

  useEffect(() => {
    dispatch({
      type: 'companyProfile/getListCapitalAndDividend',
      payload: {
        code: recentStock,
      },
    });
  }, [dispatch, recentStock]);

  const config = (data, xField, yField, xAlias, yAlias) => ({
    data,
    xField,
    yField,
    label: {
      position: 'middle',
      style: {
        fill: '#000000',
        opacity: 0.6,
      },
      content: () => {
        return null;
      },
      offset: 10,
    },
    meta: {
      [xField]: { alias: xAlias },
      [yField]: { alias: yAlias || 'Giá trị' },
    },
  });

  const getMost4RecentYear = (data) => {
    return data.slice(0, 4).sort((a, b) => (a.year > b.year ? 1 : -1));
  };

  const configForCashDividend = config(
    cashdividendlistList
      ? getMost4RecentYear(cashdividendlistList).map(({ year, valuepershare }) => ({
          year,
          valuePerShare: valuepershare / 1.0,
        }))
      : [],
    'year',
    'valuePerShare',
  );

  const configForOwnercapitallistList = config(
    ownercapitallistList
      ? getMost4RecentYear(ownercapitallistList).map(({ year, ownercapital }) => ({
          year,
          ownerCapital: Math.round((ownercapital / 1000000000.0) * 100.0) / 100.0,
        }))
      : [],
    'year',
    'ownerCapital',
  );

  const configForAssetListList = config(
    assetlistList
      ? getMost4RecentYear(assetlistList).map(({ year, asset }) => ({
          year,
          asset: Math.round((asset / 1000000000.0) * 100.0) / 100.0,
        }))
      : [],
    'year',
    'asset',
  );

  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
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
            <Card title={'Cổ tức bằng tiền (VNĐ)'}>
              <Column {...configForCashDividend} />
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
            <Card title={'Vốn chủ sở hữu (Tỷ đồng)'}>
              <Column {...configForOwnercapitallistList} />
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
            <Card title={'Tài sản (Tỷ đồng)'}>
              <Column {...configForAssetListList} />
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
}))(CapitalAndDividend);
