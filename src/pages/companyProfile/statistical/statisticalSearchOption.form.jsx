import React from 'react';
import { Form, Button, DatePicker } from 'antd';
import { connect } from 'umi';

const StatisticalSearchOptionForm = ({ dispatch, recentStock }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form.validateFields().then((values) => {
      dispatch({
        type: 'companyProfile/getListStatistical',
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
      <Form.Item name="fromDate" rules={[{ required: false }]}>
        <DatePicker placeholder="Từ ngày" />
      </Form.Item>

      <Form.Item name="toDate" rules={[{ required: false }]}>
        <DatePicker placeholder="Đến ngày" />
      </Form.Item>

      <Form.Item>
        <Button onClick={onFinish}> Tìm kiếm </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(({ tradingExchange, loading, companyProfile }) => ({
  tradingExchange,
  companyProfile,
  submitting: loading.effects['login/login'],
}))(StatisticalSearchOptionForm);
