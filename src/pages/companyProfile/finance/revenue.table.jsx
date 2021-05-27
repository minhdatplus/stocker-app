import React from 'react';
import { Col, Row, Table } from 'antd';
import { FormattedNumber } from 'umi';
import { Column as ColumnChart } from '@ant-design/charts';

const { Column } = Table;

const RevenueTable = ({ listFinance, mostRecentYear }) => {
  const listColumnName = [];
  if (listFinance)
    listFinance.forEach(({ yearreport }) => {
      if (!listColumnName.includes(yearreport)) listColumnName.push(yearreport);
    });
  listColumnName.sort();

  const dataTable = [
    { reportTime: 'Quý 1' },
    { reportTime: 'Quý 2' },
    { reportTime: 'Quý 3' },
    { reportTime: 'Quý 4' },
    { reportTime: 'Năm' },
  ];
  if (listFinance)
    listFinance.forEach(({ lengthreport, yearreport, revenue }) => {
      dataTable[lengthreport - 1] = {
        ...dataTable[lengthreport - 1],
        [`column-${yearreport}`]: revenue,
      };
    });

  const mostRecentYearChartData = [];
  const severalYearChartData = [];
  if (listFinance) {
    listFinance
      .filter(({ yearreport, lengthreport }) => {
        return yearreport === mostRecentYear && lengthreport < 5;
      })
      .forEach(({ revenue, lengthreport, yearreport }) => {
        mostRecentYearChartData.push({
          timeName: `Q${lengthreport} ${yearreport}`,
          value: parseFloat((revenue / 1000000000.0).toFixed(2)),
        });
      });

    listFinance
      .filter(({ yearreport, lengthreport }) => {
        return yearreport >= mostRecentYear - 3 && lengthreport >= 5;
      })
      .forEach(({ revenue, yearreport }) => {
        severalYearChartData.push({
          timeName: `${yearreport}`,
          value: parseFloat((revenue / 1000000000.0).toFixed(2)),
        });
      });

    const comparator = (a, b) => {
      if (a.timeName < b.timeName) return -1;
      if (a.timeName > b.timeName) return 1;
      return 0;
    };

    mostRecentYearChartData.sort(comparator);
    severalYearChartData.sort(comparator);
  }

  return (
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
        <Table dataSource={dataTable} bordered scroll={{ x: true }}>
          <Column title={''} fixed={true} dataIndex={`reportTime`} key={`reportTime`} />
          {listColumnName.map((name) => (
            <Column
              title={name}
              dataIndex={`column-${name}`}
              key={`column-${name}`}
              render={(val, record, index) => {
                if (index > 3)
                  return (
                    <strong>
                      {' '}
                      <FormattedNumber value={(val / 1000000000.0).toFixed(2)} />
                    </strong>
                  );
                return <FormattedNumber value={(val / 1000000000.0).toFixed(2)} />;
              }}
            />
          ))}
        </Table>
      </Col>

      <Col
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <ColumnChart
          xField={'timeName'}
          yField={'value'}
          data={mostRecentYearChartData}
          meta={{ value: { alias: 'Giá trị', formatter: (v) => `${v} tỷ đồng` } }}
        />
      </Col>

      <Col
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <ColumnChart
          xField={'timeName'}
          yField={'value'}
          data={severalYearChartData}
          meta={{ value: { alias: 'Giá trị', formatter: (v) => `${v} tỷ đồng` } }}
        />
      </Col>
    </Row>
  );
};

export default RevenueTable;
