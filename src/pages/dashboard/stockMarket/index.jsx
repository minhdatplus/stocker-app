import React, {useEffect, useRef, useState} from 'react';
import {Card, Col, Row} from "antd";
import {FormattedMessage} from "umi";
import {GridContent} from "@ant-design/pro-layout";
import StockMarketTable from "@/pages/dashboard/stockMarket/stockMarket.table";
import {data} from "@/pages/dashboard/stockMarket/config/priceTable.fakeData";
import TopChangeStock from "@/pages/dashboard/stockMarket/topChangeStock";
import {createChart} from 'lightweight-charts';


const Index = () => {

  const chartDiv = useRef(null);
  const [chart, setChart] = useState(null);
  const [lineSeries1, setLineSeries1] = useState(null);
  const [lineSeries2, setLineSeries2] = useState(null);

  useEffect(() => {
    if (chartDiv) setChart(createChart(chartDiv.current, {height: 300}));
  }, [chartDiv]);

  useEffect(() => {
    if (chart) {
      setLineSeries1(chart.addLineSeries({
        priceLineColor: 'red',
        title: 'Stock Price 1',
        color: 'red',
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        priceScaleId: 'right',
      }));

      setLineSeries2(chart.addLineSeries({
        priceLineColor: 'green',
        color: 'green',
        title: 'Stock Price 2',
        scaleMargins: {
          top: 0.1,
          bottom: 0.3,
        },
        priceScaleId: 'right'
      }))
    }
  }, [chart]);

  useEffect(() => {
    if (lineSeries1) lineSeries1.setData([
      {time: '2019-04-11', value: 80.01},
      {time: '2019-04-12', value: 96.63},
      {time: '2019-04-13', value: 76.64},
      {time: '2019-04-14', value: 81.89},
      {time: '2019-04-15', value: 74.43},
      {time: '2019-04-16', value: 80.01},
      {time: '2019-04-17', value: 96.63},
      {time: '2019-04-18', value: 76.64},
      {time: '2019-04-19', value: 81.89},
      {time: '2019-04-20', value: 74.43},
    ]);

    if (lineSeries2) lineSeries2.setData([
      {time: '2019-04-11', value: 85.01},
      {time: '2019-04-12', value: 100.63},
      {time: '2019-04-13', value: 81.64},
      {time: '2019-04-14', value: 82.89},
      {time: '2019-04-15', value: 90.43},
      {time: '2019-04-16', value: 100.01},
      {time: '2019-04-17', value: 200.63},
      {time: '2019-04-18', value: 80.64},
      {time: '2019-04-19', value: 90.89},
      {time: '2019-04-20', value: 60.43},
    ]);
  }, [lineSeries1]);

  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>

          <Col xl={24}
               lg={24}
               md={24}
               sm={24}
               xs={24}
               style={{
                 marginBottom: 24,
               }}
          >
            <div ref={chartDiv} style={{width: '100%'}}/>
          </Col>

          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card
              title={
                <FormattedMessage
                  id="dashboardandstockmarket.stockmarket.markettable"
                  defaultMessage="Real-Time Trading Activity"
                />
              }
              bordered={false}
            >
              <StockMarketTable data={data}/>
            </Card>
          </Col>

          <Col
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card
              title={
                <FormattedMessage
                  id="dashboardandstockmarket.stockmarket.topChangeTable"
                  defaultMessage="Real-Time Trading Activity"
                />
              }
              bordered={false}
            >
              <TopChangeStock/>
            </Card>
          </Col>

        </Row>
      </React.Fragment>
    </GridContent>
  )
}

export default Index;
