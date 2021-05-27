import React from 'react';
import { Card, Col, Row } from 'antd';
import CompanyClassBadge from '@/pages/basicAnalysis/companySnapshot/companyClass.badge';

const CompanyRankingSection = ({ companyScore }) => {
  const {
    icbRank,
    icbTotalRanked,
    indexRank,
    indexTotalRanked,
    comGroupCode,
    growth,
    value,
    momentum,
    vgm,
  } = companyScore && companyScore.length > 0 ? companyScore[0] : {};

  return (
    <Card>
      <Row>
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
          <Row>
            <Col
              xl={8}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              FiinTrade Xếp Hạng
            </Col>
            <Col
              xl={8}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              {icbRank}/{icbTotalRanked} <small> Dịch vụ tài chính </small>
            </Col>
            <Col
              xl={8}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              {indexRank}/{indexTotalRanked} <small> {comGroupCode} </small>
            </Col>
          </Row>
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
          <Row gutter={24}>
            <Col
              xl={4}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              Đánh giá
            </Col>
            <Col
              xl={5}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <CompanyClassBadge compClass={value} /> <small> Giá trị </small>
            </Col>
            <Col
              xl={6}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <CompanyClassBadge compClass={growth} /> <small> Tăng trưởng </small>
            </Col>
            <Col
              xl={5}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <CompanyClassBadge compClass={momentum} /> <small> Động lực </small>
            </Col>
            <Col
              xl={4}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={{
                marginBottom: 24,
              }}
            >
              <CompanyClassBadge compClass={vgm} /> <small> VGM </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CompanyRankingSection;
