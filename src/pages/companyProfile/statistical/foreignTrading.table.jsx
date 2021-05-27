import React from 'react';
import { Table } from 'antd';
import { FormattedNumber } from 'umi';

const { Column, ColumnGroup } = Table;

const ForeignTradingTable = ({ data }) => {
  return (
    <Table dataSource={data} bordered pagination={{ pageSize: 10 }}>
      <Column
        title="Ngày"
        dataIndex="tradingdate"
        key="tradingdate"
        render={(val) => val.split(' ')[0]}
      />

      <Column
        title="Room NN"
        dataIndex="foreigncurrentroom"
        key="foreigncurrentroom"
        render={(val) => <FormattedNumber value={val} />}
      />

      <Column
        title="KL Ròng"
        dataIndex="netbuysellvol"
        key="netbuysellvol"
        render={(val) => <FormattedNumber value={val} />}
      />

      <Column
        title="GT Ròng"
        dataIndex="netbuysellval"
        key="netbuysellval"
        render={(val) => <FormattedNumber value={val} />}
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
    </Table>
  );
};

export default ForeignTradingTable;
