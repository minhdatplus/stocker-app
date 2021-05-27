import React from 'react';
import { List, Typography } from 'antd';

const LeaderShipTable = ({ data }) => {
  return (
    <List
      pagination={{
        pageSize: 5,
        size: 'small',
      }}
      size={'small'}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text strong={true}> {item.fullname} </Typography.Text>
          <br />
          {item.positionname}
        </List.Item>
      )}
    />
  );
};

export default LeaderShipTable;
