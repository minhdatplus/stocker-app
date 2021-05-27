import {Table, Tag} from "antd";
import React from "react";

const {Column, ColumnGroup} = Table;

const StockMarketTable = ({data}) => {
  return (
    <Table dataSource={data} scroll={{ x: 1500}} bordered>
      <Column title="Symbol" dataIndex="symbol" key="symbol"/>

      <Column title="Cell" dataIndex="cell" key="cell"
              render={cell => <Tag color="blue" key={cell}> {cell}</Tag>}
      />

      <Column title="Floor" dataIndex="floor" key="floor"
              render={floor => <Tag color="red" key={floor}> {floor}</Tag>}
      />

      <Column title="Ref" dataIndex="ref" key="ref"
              render={ref => <Tag color="yellow" key={ref}> {ref}</Tag>}
      />

      <ColumnGroup title="Bid">
        <Column title="P3" dataIndex="p3Bid" key="p3-bid"/>
        <Column title="Vol3" dataIndex="vol3Bid" key="vol3-bid"/>
        <Column title="P2" dataIndex="p2Bid" key="p2-bid"/>
        <Column title="Vol2" dataIndex="vol2Bid" key="vol2-bid"/>
        <Column title="P1" dataIndex="p1Bid" key="p1-bid"/>
        <Column title="Vol1" dataIndex="vol1Bid" key="vol1-bid"/>
      </ColumnGroup>
      <ColumnGroup title="Matched">
        <Column title="Price" dataIndex="price" key="price"/>
        <Column title="Vol" dataIndex="vol" key="vol"/>
        <Column title="+/-" dataIndex="change" key="change"/>
        <Column title="+/- (%)" dataIndex="changePer" key="changePer" render={per => `${per} %`}/>
      </ColumnGroup>
      <ColumnGroup title="Asked">
        <Column title="P3" dataIndex="p3Asked" key="p3-asked"/>
        <Column title="Vol3" dataIndex="vol3Asked" key="vol3-asked"/>
        <Column title="P2" dataIndex="p2Asked" key="p2-asked"/>
        <Column title="Vol2" dataIndex="vol2Asked" key="vol2-asked"/>
        <Column title="P1" dataIndex="p1Asked" key="p1-asked"/>
        <Column title="Vol1" dataIndex="vol1Asked" key="vol1-asked"/>
      </ColumnGroup>
      <Column title="High" dataIndex="high" key="high"/>
      <Column title="Low" dataIndex="low" key="low"/>
      <Column title="Total Vol" dataIndex="totalVol" key="totalVol"/>
      <ColumnGroup title="Foreign">
        <Column title="FBuy" dataIndex="fBuy" key="fBuy"/>
        <Column title="FSell" dataIndex="fSell" key="fSell"/>
        <Column title="Room" dataIndex="room" key="room"/>
      </ColumnGroup>
    </Table>
  );
}

export default StockMarketTable;
