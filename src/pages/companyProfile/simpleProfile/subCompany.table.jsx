import React from 'react';
import { Table } from 'antd';
import { FormattedNumber } from 'umi';

const { Column } = Table;

const SubCompanyTable = ({ data }) => {
  return (
    <Table dataSource={data} bordered size={'small'}>
      <Column title="Tên Công ty" dataIndex="childcompanyname" key="childcompanyname" />

      <Column title="Mã" dataIndex="childsymbol" key="childsymbol" />

      <Column
        title="VĐL (tỷ)"
        dataIndex="chartercapital"
        key="chartercapital"
        render={(cell) => (
          <span>
            {' '}
            <FormattedNumber value={cell / 1000000000} />{' '}
          </span>
        )}
      />

      <Column
        title="Tỷ lệ nắm giữ"
        dataIndex="percentage"
        key="percentage"
        render={(cell) => (
          <span>
            {' '}
            <FormattedNumber value={cell * 100} /> %{' '}
          </span>
        )}
      />
    </Table>
  );
};

export default SubCompanyTable;
