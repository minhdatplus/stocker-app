import React, { useEffect, useState } from 'react';
import { Avatar, Button, Col, Row } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import { DatePicker, List } from 'antd';
import { connect } from 'umi';

const { RangePicker } = DatePicker;

const formatDate = 'DD/MM/YYYY';

const FinanceNews = ({ dispatch, recentStock, companyProfile: { listNews } }) => {
  const [fromDateStr, setFromDateStr] = useState('');
  const [toDateStr, setToDateStr] = useState('');

  const onClickSearch = () => {
    dispatch({
      type: 'companyProfile/getListNews',
      payload: {
        code: recentStock,
        fromDate: fromDateStr,
        toDate: toDateStr,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: 'companyProfile/getListNews',
      payload: {
        code: recentStock,
        fromDate: fromDateStr,
        toDate: toDateStr,
      },
    });
  }, [fromDateStr, toDateStr, dispatch, recentStock]);

  const onChangeRangePicker = ([fromDate, toDate]) => {
    setFromDateStr(fromDate.format(formatDate));
    setToDateStr(toDate.format(formatDate));
  };

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
            <RangePicker onChange={onChangeRangePicker} />
            <Button style={{ marginLeft: 10 }} onClick={onClickSearch}>
              {' '}
              Tra cứu{' '}
            </Button>
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
            <List
              itemLayout="horizontal"
              dataSource={listNews || []}
              pagination={{
                pageSize: 6,
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={
                          item.imageurl ||
                          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        }
                      />
                    }
                    title={<a href={item.newssourcelink}>{item.title}</a>}
                    description={
                      <span>
                        {item.shortcontent}
                        <br />
                        <small> Cập nhật: {item.updatedate} </small>
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
  );
};

export default connect(({ tradingExchange, loading, companyProfile }) => ({
  tradingExchange,
  companyProfile,
  submitting: loading.effects['login/login'],
}))(FinanceNews);
