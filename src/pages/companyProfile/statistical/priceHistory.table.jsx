import React from 'react';
import { Table } from 'antd';
import { FormattedNumber } from 'umi';
import { CaretUpOutlined, CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;

const changeDisplay = (changeVal, changePer) => {
  let color = null;
  let arrowIcon = null;
  if (changeVal > 0) {
    color = 'green';
    arrowIcon = <CaretUpOutlined />;
  } else if (parseFloat(changeVal) === 0) {
    color = '#fdd835';
    arrowIcon = <CaretRightOutlined />;
  } else {
    color = 'red';
    arrowIcon = <CaretDownOutlined />;
  }

  return (
    <span style={{ color }}>
      {' '}
      {arrowIcon} <FormattedNumber value={(changeVal / 1000.0).toFixed(2)} /> (
      <FormattedNumber value={(changePer * 100.0).toFixed(2)} /> %){' '}
    </span>
  );
};

const PriceHistoryTable = ({ data }) => {
  return (
    <Table dataSource={data} bordered pagination={{ pageSize: 10 }}>
      <Column
        title="Ngày"
        dataIndex="tradingdate"
        key="tradingdate"
        render={(val) => val.split(' ')[0]}
      />

      <Column
        title="Thay đổi"
        dataIndex="pricechange"
        key="pricechange"
        render={(val, { perpricechange }) => <span>{changeDisplay(val, perpricechange)}</span>}
      />

      <Column
        title="Đóng cửa"
        dataIndex="closeprice"
        key="closeprice"
        render={(val) => (
          <span>
            {' '}
            <FormattedNumber value={val / 1000} />{' '}
          </span>
        )}
      />

      <Column
        title="Đóng cửa ĐC"
        dataIndex="closepriceadjusted"
        key="closepriceadjusted"
        render={(val) => (
          <span>
            {' '}
            <FormattedNumber value={val / 1000} />{' '}
          </span>
        )}
      />

      <ColumnGroup title={'GD Khớp lệnh'}>
        <Column
          title="Khối lượng"
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
          title="Giá trị (x1,000 VND)"
          dataIndex="totalmatchval"
          key="totalmatchval"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val / 1000} />{' '}
            </span>
          )}
        />
      </ColumnGroup>

      <ColumnGroup title={'GD Thỏa thuận'}>
        <Column
          title="KLTT"
          dataIndex="totaldealvol"
          key="totaldealvol"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val} />{' '}
            </span>
          )}
        />
        <Column
          title="GTTT (x1,000 VND)"
          dataIndex="totaldealval"
          key="totaldealval"
          render={(val) => (
            <span>
              {' '}
              <FormattedNumber value={val / 1000} />{' '}
            </span>
          )}
        />
      </ColumnGroup>

      <Column
        title="Mở cửa"
        dataIndex="openprice"
        key="openprice"
        render={(val) => (
          <span>
            {' '}
            <FormattedNumber value={val / 1000.0} />{' '}
          </span>
        )}
      />

      <Column
        title="Cao nhất"
        dataIndex="highestprice"
        key="highestprice"
        render={(val) => (
          <span>
            {' '}
            <FormattedNumber value={val / 1000.0} />{' '}
          </span>
        )}
      />

      <Column
        title="Cao nhất"
        dataIndex="lowestprice"
        key="lowestprice"
        render={(val) => (
          <span>
            {' '}
            <FormattedNumber value={val / 1000.0} />{' '}
          </span>
        )}
      />

      <Column
        title="Trung bình"
        dataIndex="averageprice"
        key="averageprice"
        render={(val) => (
          <span>
            {' '}
            <FormattedNumber value={val / 1000.0} />{' '}
          </span>
        )}
      />
    </Table>
  );
};

export default PriceHistoryTable;
