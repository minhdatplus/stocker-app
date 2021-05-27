import {
  getCompanyScoreService,
  getLatestPriceService,
  getTickerSeriesService,
} from '@/services/basicAnalysis';

const Model = {
  namespace: 'basicAnalysis',
  state: {
    companyScore: null,
    latestPrice: null,
    tickerSeries: null,
  },
  effects: {
    *getCompanyScore({ payload: { code } }, { call, put }) {
      const response = yield call(getCompanyScoreService, code);

      yield put({
        type: 'changeCompanyScore',
        payload: {
          companyScore: response?.items,
        },
      });
    },

    *getLatestPrice({ payload: { code } }, { call, put }) {
      const response = yield call(getLatestPriceService, code);

      yield put({
        type: 'changeLatestPrice',
        payload: {
          latestPrice: response?.items,
        },
      });
    },

    *getTickerSeries({ payload: { code } }, { call, put }) {
      const response = yield call(getTickerSeriesService, code);

      yield put({
        type: 'changeTickerSeries',
        payload: {
          tickerSeries: response?.items,
        },
      });
    },
  },
  reducers: {
    changeCompanyScore(state, { payload: { companyScore } }) {
      return {
        ...state,
        companyScore,
      };
    },

    changeLatestPrice(state, { payload: { latestPrice } }) {
      return {
        ...state,
        latestPrice,
      };
    },

    changeTickerSeries(state, { payload: { tickerSeries } }) {
      return {
        ...state,
        tickerSeries,
      };
    },
  },
};
export default Model;
