import React from 'react';
import { Tag } from 'antd';

const CompanyClassBadge = ({ compClass }) => {
  let badgeColor;
  if (compClass === 'C') badgeColor = '#ffd700';
  else if (compClass === 'B') badgeColor = '#87d068';

  return <Tag color={badgeColor}> {compClass} </Tag>;
};

export default CompanyClassBadge;
