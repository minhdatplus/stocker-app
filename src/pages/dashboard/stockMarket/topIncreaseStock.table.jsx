import {Table} from "antd";
import React from "react";

const {Column} = Table;

const TopIncreaseStockTable = ({data}) => {
  return (
    <Table dataSource={data}  bordered>
      <Column title="Symbol" dataIndex="symbol" key="symbol"/>

      <Column title="Last price" dataIndex="lastPrice" key="lastPrice"/>

      <Column title="Current price" dataIndex="currentPrice" key="currentPrice"/>

      <Column title="% Increase" dataIndex="increasePercent" key="increasePercent"
            render={(rowData) => {
              return <span style={{color: '#79af3a'}}> {rowData} % </span>
            }}
      />
    </Table>
  );
}

export default TopIncreaseStockTable;
