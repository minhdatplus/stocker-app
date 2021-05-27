import React from 'react';
import { Form, Button, Select, DatePicker } from 'antd';
import { connect } from 'umi';

const SearchOptionForm = ({ dispatch, recentStock }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form.validateFields().then((values) => {
      dispatch({
        type: 'companyProfile/getListEntitlement',
        payload: {
          code: recentStock,
          ...values,
          fromDate: values?.fromDate?.format('DD/MM/YYYY'),
          toDate: values?.toDate?.format('DD/MM/YYYY'),
        },
      });
    });
  };

  return (
    <Form form={form} name="control-hooks" layout={'inline'}>
      <Form.Item name="dateType" rules={[{ required: true }]} style={{ width: '20%' }}>
        <Select placeholder="Loại ngày">
          <Select.Option value={'ex_date'}> Ngày GDKHQ </Select.Option>
          <Select.Option value={'pub_date'}> Ngày công bố </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="fromDate" rules={[{ required: true }]}>
        <DatePicker placeholder="Từ ngày" />
      </Form.Item>

      <Form.Item name="toDate" rules={[{ required: true }]}>
        <DatePicker placeholder="Đến ngày" />
      </Form.Item>

      <Form.Item name="eventCode" rules={[{ required: true }]}>
        <Select placeholder="Nhóm sự kiện">
          <Select.Option value={'dhcd'}> Đại hội cổ đông </Select.Option>
          <Select.Option value={'ny'}> Niêm yết </Select.Option>
          <Select.Option value={'gdnb'}> GD Nội bộ </Select.Option>
          <Select.Option value={'tct'}> Trả cổ tức </Select.Option>
          <Select.Option value={'kqkd'}> Kết quả kinh doanh </Select.Option>
          <Select.Option value={'skk'}>Sự kiện khác </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button onClick={onFinish}> Tìm kiếm </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(() => ({}))(SearchOptionForm);
