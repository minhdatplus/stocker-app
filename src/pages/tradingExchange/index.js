import React, {useEffect} from 'react';
import {GridContent} from "@ant-design/pro-layout";
import {Button, Row, Col, Card} from 'antd';
import {connect, history} from "umi";
import TradingExchangeTable from "@/pages/tradingExchange/tradingExchange.table";

const TradingExchange = ({dispatch, tradingExchange: {listAllStock}, location: {query: {exchange}}}) => {

  const WrapperCol = ({children}) => {
    return (
      <Col xl={8} lg={8} xs={24}>
        {children}
      </Col>
    )
  }

  const WrapperButton = ({children, ...props}) => {
    return (
      <Button block={true} type={'primary'} style={{height: '100%'}} {...props}> {children}  </Button>
    )
  }

  useEffect(() => {
    dispatch({
      type: 'tradingExchange/getAllStock'
    });
  }, [dispatch]);

  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>

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
                'Sàn giao dịch'
              }
              bordered={false}
            >
              {
                !exchange &&
                <Row gutter={[8, 8]} style={{height: 500}}>
                  <WrapperCol>
                    <WrapperButton
                      onClick={() => history.push('/trading-exchange?exchange=HOSE')}> HOSE </WrapperButton>
                  </WrapperCol>
                  <WrapperCol>
                    <WrapperButton
                      onClick={() => history.push('/trading-exchange?exchange=HNX')}> HN-INDEX </WrapperButton>
                  </WrapperCol>
                  <WrapperCol>
                    <WrapperButton
                      onClick={() => history.push('/trading-exchange?exchange=UPCOM')}> UPCOM </WrapperButton>
                  </WrapperCol>
                </Row>
              }

              {
                exchange && listAllStock && <div>
                  <Button style={{marginBottom: 10}} onClick={() => history.push('/trading-exchange')}> Quay lại </Button>
                  <TradingExchangeTable data={listAllStock.filter(item => item.exchange === exchange)}/>
                </div>
              }

            </Card>
          </Col>

        </Row>

      </React.Fragment>
    </GridContent>
  )
}

export default connect(({tradingExchange, loading}) => ({
  tradingExchange,
  submitting: loading.effects['login/login'],
}))(TradingExchange);
