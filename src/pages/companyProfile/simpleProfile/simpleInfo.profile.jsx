import React from 'react';
import { List, Typography } from 'antd';
import { FormattedNumber } from 'umi';

const SimpleInfoProfile = ({ companyProfile }) => {
  const {
    symbol,
    sector,
    subsectorcode,
    foundingdate,
    chartercapital,
    numberofemployee,
    banknumberofbranch,
  } = companyProfile || {};

  const listBasicInfo = [
    {
      name: 'Mã SIC',
      value: symbol,
    },
    {
      name: 'Tên ngành',
      value: sector,
    },
    {
      name: 'Mã ngành ICB',
      value: subsectorcode,
    },
    {
      name: 'Năm thành lập',
      value: foundingdate.split(' ')[0],
    },
    {
      name: 'Vốn điều lệ (tỷ)',
      value: (
        <span>
          {' '}
          <FormattedNumber value={chartercapital / 1000000000.0} /> tỷ{' '}
        </span>
      ),
    },
    {
      name: 'Số lượng nhân viên',
      value: numberofemployee,
    },
    {
      name: 'Số lượng chi nhánh',
      value: banknumberofbranch,
    },
  ];

  return (
    <List
      dataSource={listBasicInfo}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text strong={true}> {item.name} </Typography.Text>
          <Typography.Text style={{ float: 'right' }}> {item.value} </Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default SimpleInfoProfile;
