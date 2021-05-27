import request from '@/utils/request';
import {defaultAllStock} from './fakeStockData';

export async function getAllStock() {
  return new Promise((resolve) => {
    setTimeout(() => {resolve(defaultAllStock)}, 200);
  })
}

export async function getSymbolByExchange() {
  return request.post('https://gateway-iboard.ssi.com.vn/graphql', {
    data: {
      operationName: null,
      variables: {},
      query: "{\n  hose: stockRealtimes(exchange: \"hose\") {\n    stockNo\n    stockSymbol\n    exchange\n    __typename\n  }\n  hnx: stockRealtimes(exchange: \"hnx\") {\n    stockNo\n    stockSymbol\n    exchange\n    __typename\n  }\n  upcom: stockRealtimes(exchange: \"upcom\") {\n    stockNo\n    stockSymbol\n    exchange\n    __typename\n  }\n  fu: stockRealtimesFu {\n    stockNo\n    stockSymbol\n    exchange\n    __typename\n  }\n}\n'"
    }
  })
}
