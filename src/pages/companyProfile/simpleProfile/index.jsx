import React, { useEffect } from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import IntroductionProfile from '@/pages/companyProfile/simpleProfile/introduction.profile';
import SimpleInfoProfile from '@/pages/companyProfile/simpleProfile/simpleInfo.profile';
import ListingProfile from '@/pages/companyProfile/simpleProfile/listing.profile';
import SubCompanyTable from '@/pages/companyProfile/simpleProfile/subCompany.table';
import SimilarCompanyTable from '@/pages/companyProfile/simpleProfile/similarCompany.table';
import LeaderShipTable from '@/pages/companyProfile/simpleProfile/leadership.table';
import { connect } from 'umi';

const { TabPane } = Tabs;

const SimpleProfile = ({ companyProfile: companyProfileState, symbol, dispatch }) => {
  const { simpleCompanyProfile, listSubCompany, listSimilarCompany, listLeaderShip } =
    companyProfileState || {};
  const { companyProfile, companyStatistics } = simpleCompanyProfile || {};

  useEffect(() => {
    dispatch({
      type: 'companyProfile/getProfilePage',
      payload: {
        code: symbol,
      },
    });
  }, [dispatch, symbol]);

  return (
    <div>
      <Row gutter={24}>
        <Col
          xl={6}
          lg={6}
          md={24}
          sm={24}
          xs={24}
          style={{
            marginBottom: 24,
          }}
        >
          <Card bordered={true}>
            <Tabs>
              <TabPane tab={'Giới thiệu'} key={1}>
                <IntroductionProfile companyProfile={companyProfile} />
              </TabPane>
              <TabPane tab={'TT cơ bản'} key={2}>
                <SimpleInfoProfile companyProfile={companyProfile} />
              </TabPane>
              <TabPane tab={'TT niêm yết'} key={3}>
                <ListingProfile
                  companyProfile={companyProfile}
                  companyStatistics={companyStatistics}
                />
              </TabPane>
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
          <Card bordered={true}>
            <Tabs>
              <TabPane tab={'Công ty con'} key={1}>
                <SubCompanyTable
                  data={listSubCompany ? listSubCompany.filter((item) => item.roleid === '11') : []}
                />
              </TabPane>
              <TabPane tab={'Công ty liên kết'} key={2}>
                <SubCompanyTable
                  data={listSubCompany ? listSubCompany.filter((item) => item.roleid === '14') : []}
                />
              </TabPane>
            </Tabs>
          </Card>
        </Col>

        <Col
          xl={5}
          lg={5}
          md={12}
          sm={12}
          xs={12}
          style={{
            marginBottom: 24,
          }}
        >
          <Card bordered={true}>
            <Tabs>
              <TabPane tab={'Công ty cùng ngành'} key={1} style={{ overflow: 'auto' }}>
                <SimilarCompanyTable data={listSimilarCompany} />
              </TabPane>
            </Tabs>
          </Card>
        </Col>

        <Col
          xl={5}
          lg={5}
          md={12}
          sm={12}
          xs={12}
          style={{
            marginBottom: 24,
          }}
        >
          <Card bordered={true}>
            <Tabs>
              <TabPane tab={'Ban lãnh đạo'} key={1} style={{ overflow: 'auto' }}>
                <LeaderShipTable data={listLeaderShip || []} />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ companyProfile }) => ({
  companyProfile,
}))(SimpleProfile);
