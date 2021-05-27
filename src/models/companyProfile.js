import {
  getListCapitalAndDividendService,
  getListEntitlementService,
  getListFinanceService,
  getListLeaderShipService,
  getListNewsService,
  getListShareHolderService,
  getListStatisticalService,
  getSimilarCompanyService,
  getSimpleCompanyProfileService,
  getSubCompanyService,
} from '@/services/companyProfile';

const Model = {
  namespace: 'companyProfile',
  state: {
    isLoading: false,
    status: undefined,
    simpleCompanyProfile: null,
    listSubCompany: null,
    listSimilarCompany: null,
    listLeaderShip: null,
    listShareHolder: null,
    listCapitalAndDividend: null,
    listNews: null,
    listEntitlement: null,
    listStatistical: null,
    listFinance: null,
  },
  effects: {
    *getProfilePage({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getSimpleCompanyProfileService, code);
        yield put({
          type: 'changeSimpleCompanyProfile',
          payload: {
            simpleCompanyProfile: response.data,
          },
        });

        const response1 = yield call(getSubCompanyService, code);
        yield put({
          type: 'changeListSubCompany',
          payload: {
            listSubCompany: response1?.data?.subCompanies?.datas,
          },
        });

        const response3 = yield call(getListLeaderShipService, code);
        yield put({
          type: 'changeListLeaderShip',
          payload: {
            listLeaderShip: response3?.data?.leaderships?.datas,
          },
        });

        const response2 = yield call(getSimilarCompanyService, code);
        yield put({
          type: 'changeSimilarCompany',
          payload: {
            listSimilarCompany: response2?.data?.similarIndustryCompanies?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getSimpleCompanyProfile({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getSimpleCompanyProfileService, code);
        yield put({
          type: 'changeSimpleCompanyProfile',
          payload: {
            simpleCompanyProfile: response.data,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getSubCompany({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getSubCompanyService, code);
        yield put({
          type: 'changeListSubCompany',
          payload: {
            listSubCompany: response?.data?.subCompanies?.datas,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getSimilarCompany({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getSimilarCompanyService, code);
        yield put({
          type: 'changeSimilarCompany',
          payload: {
            listSimilarCompany: response?.data?.similarIndustryCompanies?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListLeaderShip({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getListLeaderShipService, code);

        yield put({
          type: 'changeListLeaderShip',
          payload: {
            listLeaderShip: response?.data?.leaderships?.datas,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListShareHolder({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getListShareHolderService, code);

        yield put({
          type: 'changeListShareHolder',
          payload: {
            listShareHolder: response?.data?.shareholders?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListCapitalAndDividend({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getListCapitalAndDividendService, code);

        yield put({
          type: 'changeListCapitalAndDividend',
          payload: {
            listCapitalAndDividend: response?.data?.capAndDividend,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListNews({ payload: { code, fromDate, toDate } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getListNewsService, code, fromDate, toDate);

        yield put({
          type: 'changeListNews',
          payload: {
            listNews: response?.data?.news?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListEntitlement(
      { payload: { code, fromDate, toDate, dateType, eventCode } },
      { call, put },
    ) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(
          getListEntitlementService,
          code,
          dateType,
          fromDate,
          toDate,
          eventCode,
        );

        yield put({
          type: 'changeListEntitlement',
          payload: {
            listEntitlement: response?.data?.corporateActions?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListStatistical({ payload: { code, fromDate, toDate } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getListStatisticalService, code, fromDate, toDate);

        yield put({
          type: 'changeListStatistical',
          payload: {
            listStatistical: response?.data?.stockPrice?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },

    *getListFinance({ payload: { code } }, { call, put }) {
      yield put({
        type: 'changeIsLoading',
        payload: {
          isLoading: true,
        },
      });

      try {
        const response = yield call(getListFinanceService, code);

        yield put({
          type: 'changeListFinance',
          payload: {
            listFinance: response?.data?.financialIndicator?.dataList,
          },
        });
      } finally {
        yield put({
          type: 'changeIsLoading',
          payload: {
            isLoading: false,
          },
        });
      }
    },
  },
  reducers: {
    changeSimpleCompanyProfile(state, { payload: { simpleCompanyProfile } }) {
      return {
        ...state,
        simpleCompanyProfile,
      };
    },

    changeListSubCompany(state, { payload: { listSubCompany } }) {
      return {
        ...state,
        listSubCompany,
      };
    },

    changeSimilarCompany(state, { payload: { listSimilarCompany } }) {
      return {
        ...state,
        listSimilarCompany,
      };
    },

    changeListLeaderShip(state, { payload: { listLeaderShip } }) {
      return {
        ...state,
        listLeaderShip,
      };
    },

    changeListShareHolder(state, { payload: { listShareHolder } }) {
      return {
        ...state,
        listShareHolder,
      };
    },

    changeListCapitalAndDividend(state, { payload: { listCapitalAndDividend } }) {
      return {
        ...state,
        listCapitalAndDividend,
      };
    },

    changeListNews(state, { payload: { listNews } }) {
      return {
        ...state,
        listNews,
      };
    },

    changeListEntitlement(state, { payload: { listEntitlement } }) {
      return {
        ...state,
        listEntitlement,
      };
    },

    changeListStatistical(state, { payload: { listStatistical } }) {
      return {
        ...state,
        listStatistical,
      };
    },

    changeListFinance(state, { payload: { listFinance } }) {
      return {
        ...state,
        listFinance,
      };
    },

    changeIsLoading(state, { payload: { isLoading } }) {
      return {
        ...state,
        isLoading,
      };
    },
  },
};
export default Model;
