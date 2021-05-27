import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const ListEntitlementTable = ({ data }) => {
  return (
    <Table dataSource={data} bordered pagination={{ pageSize: 5 }}>
      <Column title="Loại sự kiện" dataIndex="eventname" key="eventname" />

      <Column
        title="Ngày GDKHQ"
        dataIndex="exrightdate"
        key="exrightdate"
        render={(val) => val.split(' ')[0]}
      />

      <Column
        title="Ngày chốt"
        dataIndex="recorddate"
        key="recorddate"
        render={(val) => val.split(' ')[0]}
      />

      <Column
        title="Ngày thực hiện"
        dataIndex="issuedate"
        key="issuedate"
        render={(val) => val.split(' ')[0]}
      />

      <Column title="Nội dung" dataIndex="eventtitle" key="eventtitle" />

      <Column
        title="Ngày công bố"
        dataIndex="publicdate"
        key="publicdate"
        render={(val) => val.split(' ')[0]}
      />
    </Table>
  );
};

export default ListEntitlementTable;
