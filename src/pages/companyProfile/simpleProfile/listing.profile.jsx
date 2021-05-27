import React from 'react';
import { FormattedNumber } from 'umi';
import { List, Typography } from 'antd';

const ListingProfile = ({ companyProfile, companyStatistics }) => {
  const { listingdate, exchange, firstprice, issueshare } = companyProfile || {};

  const { sharesoutstanding, marketcap } = companyStatistics || {};

  const listListingInfo = [
    {
      name: 'Ngày niêm yết',
      value: listingdate.split(' ')[0],
    },
    {
      name: 'Nơi niêm yết',
      value: exchange,
    },
    {
      name: 'Giá chào sàn(x1000)',
      value: (
        <span>
          {' '}
          <FormattedNumber value={firstprice / 1000} />{' '}
        </span>
      ),
    },
    {
      name: 'KL đang niêm yết',
      value: (
        <span>
          {' '}
          <FormattedNumber value={issueshare} />{' '}
        </span>
      ),
    },
    {
      name: 'Thị giá vốn',
      value: (
        <span>
          {' '}
          <FormattedNumber value={marketcap / 1000000000.0} /> tỷ{' '}
        </span>
      ),
    },
    {
      name: 'SCP lưu hành',
      value: (
        <span>
          {' '}
          <FormattedNumber value={sharesoutstanding} />{' '}
        </span>
      ),
    },
  ];

  return (
    <List
      dataSource={listListingInfo}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text strong={true}> {item.name} </Typography.Text>
          <Typography.Text style={{ float: 'right' }}> {item.value} </Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default ListingProfile;
