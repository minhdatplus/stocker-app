import { endpoint, host, context } from '@/services/const/server.const';
import Axios from 'axios';

const {
  companyProfile: companyProfileEndpoint,
  subCompany: subCompanyEndpoint,
  similarCompany: similarCompanyEndpoint,
  listLeadership: listLeadershipEndpoint,
  listShareHolder: listShareHolderEndpoint,
  listCapitalAndDividend: listCapitalAndDividendEndpoint,
  listNews: listNewsEndpoint,
  listStatistical: listStatisticalEndpoint,
  listEntitlement: listEntitlementEndpoint,
  listFinance: listFinanceEndpoint,
} = endpoint;

export async function getSimpleCompanyProfileService(code) {
  return Axios.post(`${host}${context}${companyProfileEndpoint}`, {
    symbol: `${code}`,
    language: 'vn',
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getSubCompanyService(code) {
  return Axios.post(`${host}${context}${subCompanyEndpoint}`, {
    symbol: `${code}`,
    size: 100,
    offset: 1,
    language: 'vn',
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getSimilarCompanyService(code) {
  return Axios.post(`${host}${context}${similarCompanyEndpoint}`, {
    symbol: `${code}`,
    size: 100,
    offset: 1,
    language: 'vn',
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getListLeaderShipService(code) {
  return Axios.post(`${host}${context}${listLeadershipEndpoint}`, {
    symbol: `${code}`,
    size: 1000,
    offset: 1,
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getListShareHolderService(code) {
  return Axios.post(`${host}${context}${listShareHolderEndpoint}`, {
    symbol: `${code}`,
    size: 1000,
    offset: 1,
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getListCapitalAndDividendService(code) {
  return Axios.post(`${host}${context}${listCapitalAndDividendEndpoint}`, {
    symbol: `${code}`,
  })
    .then((data) => {
      return data?.data;
    })
    .catch((err) => err);
}

export async function getListNewsService(code, fromDate, toDate) {
  return Axios.post(`${host}${context}${listNewsEndpoint}`, {
    symbol: `${code}`,
    size: 1200,
    offset: 1,
    language: 'vn',
    fromDate: `${fromDate}`,
    toDate: `${toDate}`,
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getListEntitlementService(code, dateType, fromDate, toDate, eventCode) {
  return Axios.post(`${host}${context}${listEntitlementEndpoint}`, {
    symbol: `${code}`,
    size: 1000,
    offset: 1,
    dateType: `${dateType}`,
    fromDate,
    toDate,
    eventCode,
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getListStatisticalService(code, fromDate, toDate) {
  return Axios.post(`${host}${context}${listStatisticalEndpoint}`, {
    symbol: `${code}`,
    fromDate,
    toDate,
    size: 10000,
    offset: 1,
  })
    .then((data) => data?.data)
    .catch((err) => err);
}

export async function getListFinanceService(code) {
  return Axios.post(`${host}${context}${listFinanceEndpoint}`, {
    symbol: `${code}`,
    size: 1000,
  })
    .then((data) => data?.data)
    .catch((err) => err);
}
