import React from 'react';
import {FormattedNumber} from "umi";
import {Table, Typography} from "antd";

const {Column} = Table;

const typeMapping = {
  'C': 'Tổ chức',
  'I': 'Cá nhân'
}

const ShareHolderTable = ({data}) => {
  return (
    <Table dataSource={data} bordered pagination={{pageSize: 8}}>
      <Column title="Tên" dataIndex="name" key="name"
              render={(cell, record) =>
                <span> <Typography.Text> {cell} </Typography.Text> <br/> <small>{typeMapping[record.type]} </small> </span>}
      />

      <Column title="Số cổ phiếu" dataIndex="quantity" key="quantity"
              render={(cell) => <span> <FormattedNumber value={cell}/> </span>}
      />

      <Column title="Tỷ lệ" dataIndex="percentage" key="percentage"
              render={(cell) => <span> <FormattedNumber value={cell * 100}/> % </span>}
      />

      <Column title="Ngày cập nhật" dataIndex="publicdate" key="publicdate"
              render={cell => <span> {cell.split(' ')[0]} </span>}
      />

    </Table>
  )
}

export default ShareHolderTable;
