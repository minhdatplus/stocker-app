import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';
import moment from 'moment';
import { connect } from 'umi';

const StockPriceChart = ({ dispatch, recentStock, companyProfile: { listStatistical } }) => {
  useEffect(() => {
    dispatch({
      type: 'companyProfile/getListStatistical',
      payload: {
        code: recentStock,
      },
    });
  }, [dispatch, recentStock]);

  const refChart = useRef();
  const [candleStickSeries, setCandleStickSeries] = useState();

  const transformData = (data) => {
    const res = data.map(({ tradingdate, lowestprice, highestprice, openprice, closeprice }) => ({
      time: moment(tradingdate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD'),
      open: parseFloat(openprice) / 1000.0,
      high: parseFloat(highestprice) / 1000.0,
      low: parseFloat(lowestprice) / 1000.0,
      close: parseFloat(closeprice) / 1000.0,
    }));
    // res.sort((a, b) => moment(a.time, 'YYYY-MM-DD').isAfter(moment(b.time, 'YYYY-MM-DD')));
    res.reverse();
    return res;
  };

  useEffect(() => {
    if (refChart && refChart.current) {
      const chart = createChart(refChart.current, { height: 500 });
      setCandleStickSeries(chart.addCandlestickSeries({}));
    }
  }, [refChart]);

  useEffect(() => {
    if (candleStickSeries && listStatistical) {
      candleStickSeries.setData(transformData(listStatistical || []));
    }
  }, [listStatistical, candleStickSeries]);

  return (
    <div style={{ overflow: 'auto' }}>
      <div key={'StockChart'} ref={refChart} />
    </div>
  );
};

export default connect(({ tradingExchange, loading, companyProfile }) => ({
  tradingExchange,
  companyProfile,
  submitting: loading.effects['login/login'],
}))(StockPriceChart);
