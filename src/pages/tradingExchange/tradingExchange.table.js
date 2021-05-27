import {Table, Tag} from "antd";
import React from "react";

const {Column} = Table;

const TradingExchangeTable = ({data}) => {
  return (
    <Table dataSource={data} scroll={{ x: 1500}} bordered>
      <Column title="Mã Chứng Khoán" dataIndex="code" key="cell"/>

      <Column title="Mô Tả" dataIndex="description" key="cell"/>

      <Column title="Tên Công Ty" dataIndex="clientName" key="cell"/>

      <Column title="Tên sàn" dataIndex="exchange" key="cell"/>

    </Table>
  );
}

export default TradingExchangeTable;
