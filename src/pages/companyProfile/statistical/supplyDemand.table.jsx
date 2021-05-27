import React from 'react';
import { Table } from 'antd';
import { FormattedNumber } from 'umi';

const { Column, ColumnGroup } = Table;

const SupplyDemandTable = ({ data }) => {
  return (
    <Table dataSource={data} bordered pagination={{ pageSize: 10 }}>
      <Column
        title="Ngày"
        dataIndex="tradingdate"
        key="tradingdate"
        render={(val) => val.split(' ')[0]}
      />

      <ColumnGroup title={'Mua'}>
        <Column
          title="SL đặt mua"
          dataIndex="totalbuytrade"
          key="totalbuytrade"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val} />{' '}
            </span>
          )}
        />
        <Column
          title="KL đặt mua"
          dataIndex="totalbuytradevol"
          key="totalbuytradevol"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val} />{' '}
            </span>
          )}
        />
      </ColumnGroup>

      <ColumnGroup title={'Bán'}>
        <Column
          title="SL đặt bán"
          dataIndex="totalselltrade"
          key="totalselltrade"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val} />{' '}
            </span>
          )}
        />
        <Column
          title="KL đặt bán"
          dataIndex="totalselltradevol"
          key="totalselltradevol"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val} />{' '}
            </span>
          )}
        />
      </ColumnGroup>

      <ColumnGroup title={'Giao dịch'}>
        <Column
          title="KL khớp"
          dataIndex="totalmatchvol"
          key="totalmatchvol"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val} />{' '}
            </span>
          )}
        />
        <Column
          title="GT khớp (1.000VND)"
          dataIndex="totalmatchval"
          key="totalmatchval"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val / 1000.0} />{' '}
            </span>
          )}
        />
      </ColumnGroup>
    </Table>
  );
};

export default SupplyDemandTable;
