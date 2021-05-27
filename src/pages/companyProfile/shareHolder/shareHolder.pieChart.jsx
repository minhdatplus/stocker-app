import React from 'react';
import { Pie } from '@ant-design/charts';

const ShareHolderPieChart = ({listShareHolder}) => {

  const data = [
    {
      type: 'Nhà nước',
      value: listShareHolder.filter(item => item.ownershiptypecode === 'NNUOC').length
    },
    {
      type: 'Nước ngoài',
      value: listShareHolder.filter(item => item.ownershiptypecode === 'NGOAI').length
    },
    {
      type: 'Khác',
      value: listShareHolder.filter(({ownershiptypecode}) => ownershiptypecode !== 'NNUOC' && ownershiptypecode !== 'NGOAI').length
    }
  ]

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        formatter: function formatter() {
          return '';
        },
      },
    }
  };

  return (
    <Pie {...config} />
  )
}

export default ShareHolderPieChart;
