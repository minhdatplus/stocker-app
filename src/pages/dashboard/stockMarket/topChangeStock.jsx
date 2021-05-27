import React from 'react';

import {Col, Row, Tabs} from 'antd';
import TopIncreaseStockTable from "@/pages/dashboard/stockMarket/topIncreaseStock.table";
import {topDecreaseData, topIncreaseData} from "@/pages/dashboard/stockMarket/config/priceTable.fakeData";
import TopDecreaseStockTable from "@/pages/dashboard/stockMarket/topDecreaseStock.table";

const {TabPane} = Tabs;

const TopChangeStock = () => {

  const callWhenChangePeriod = () => {
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callWhenChangePeriod} style={{float: 'right'}}>
        <TabPane tab="1 Day" key="1"/>
        <TabPane tab="1 Week" key="2"/>
        <TabPane tab="1 Month" key="3"/>
        <TabPane tab="3 Month" key="4"/>
        <TabPane tab="6 Month" key="5"/>
        <TabPane tab="YTD" key="6"/>
        <TabPane tab="1 Year" key="7"/>
      </Tabs>

      <Row gutter={24}>
        <Col xl={12} lg={12} md={24}>
          <TopIncreaseStockTable data={topIncreaseData}/>
        </Col>

        <Col xl={12} lg={12} md={24}>
          <TopDecreaseStockTable data={topDecreaseData}/>
        </Col>
      </Row>
    </div>
  )
}

export default TopChangeStock;
