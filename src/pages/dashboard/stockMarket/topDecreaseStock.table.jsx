import {Table} from "antd";
import React from "react";

const {Column} = Table;

const TopDecreaseStockTable = ({data}) => {
  return (
    <Table dataSource={data}  bordered>
      <Column title="Symbol" dataIndex="symbol" key="symbol"/>

      <Column title="Last price" dataIndex="lastPrice" key="lastPrice"/>

      <Column title="Current price" dataIndex="currentPrice" key="currentPrice"/>

      <Column title="% Decrease" dataIndex="decreasePercent" key="decreasePercent"
              render={(rowData) => {
                return <span style={{color: '#f22314'}}> {rowData} % </span>
              }}
      />
    </Table>
  );
}

export default TopDecreaseStockTable;
