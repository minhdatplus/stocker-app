import {getAllStock, getSymbolByExchange} from "@/services/tradingExchange";

const Model = {
  namespace: 'tradingExchange',
  state: {
    status: undefined,
  },
  effects: {
    *getAllStock({}, {call, put}) {
      const response = yield call(getAllStock);

      if (response.status === 'ok') {
        yield put({
          type: 'changeListAllStock',
          payload: {
            listAllStock: response.data
          }
        });
      }

    },
    *getAllSymbolByExchange({},{call}) {
        const response = yield call(getSymbolByExchange);
        console.log(response);
    }
  },
  reducers: {
    changeListAllStock(state, {payload: {listAllStock}}) {
      return {
        ...state,
        listAllStock
      };
    },
  },
};
export default Model;
