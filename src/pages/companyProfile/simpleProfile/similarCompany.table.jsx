import React from 'react';
import { Table } from 'antd';
import { FormattedNumber } from 'umi';

const { Column } = Table;

const SimilarCompanyTable = ({ data }) => {
  return (
    <Table dataSource={data} bordered pagination={{ pageSize: 5 }} size={'small'}>
      <Column title="Mã" dataIndex="symbol" key="symbol" />

      <Column
        title="Giá"
        dataIndex="currentprice"
        key="currentprice"
        render={(cell, record) => (
          <span>
            {' '}
            <FormattedNumber value={cell / 1000} /> <br /> {record.perpricechange}{' '}
          </span>
        )}
      />

      <Column
        title="KLGD"
        dataIndex="matchvolume"
        key="matchvolume"
        render={(cell) => (
          <span>
            {' '}
            <FormattedNumber value={cell} />{' '}
          </span>
        )}
      />
    </Table>
  );
};

export default SimilarCompanyTable;
