import companyProfile from './data/companyProfile.json';
import subCompany from './data/subCompany.json';
import similarCompany from './data/similarCompany.json';
import listLeadership from './data/listLeaderShip.json';
import shareHolderPersonal from './data/shareHolderPersonal.json';
import listNews from './data/listNews.json';
import listEntitlement from './data/listEntitlement.json';
import listStatistical from './data/listStatistical.json';
import listFinance from './data/listFinance.json';
import companyScore from './data/companyScore.json';
import latestPrice from './data/lastestPrice.json';
import tickerSeries from './data/tickerSeries.json';
import capitalAndDividend from './data/capitalAndDividiend.json';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'POST /api/profile/company-profile': async (req, res) => {
    await waitTime(800);
    res.send(companyProfile);
  },
  'POST /api/profile/sub-company': async (req, res) => {
    await waitTime(800);
    res.send(subCompany);
  },
  'POST /api/profile/similar-company': async (req, res) => {
    await waitTime(800);
    res.send(similarCompany);
  },
  'POST /api/profile/list-leadership': async (req, res) => {
    await waitTime(800);
    res.send(listLeadership);
  },
  'POST /api/profile/list-shareholder': async (req, res) => {
    await waitTime(800);
    res.send(shareHolderPersonal);
  },
  'POST /api/profile/list-capitalAndDividend': async (req, res) => {
    await waitTime(800);
    res.send(capitalAndDividend);
  },
  'POST /api/profile/list-news': async (req, res) => {
    await waitTime(800);
    res.send(listNews);
  },
  'POST /api/profile/list-entitlement': async (req, res) => {
    await waitTime(800);
    res.send(listEntitlement);
  },
  'POST /api/profile/list-statistical': async (req, res) => {
    await waitTime(800);
    res.send(listStatistical);
  },
  'POST /api/profile/list-finance': async (req, res) => {
    await waitTime(800);
    res.send(listFinance);
  },
  'POST /api/profile/company-score': async (req, res) => {
    await waitTime(800);
    res.send(companyScore);
  },
  'POST /api/profile/latest-price': async (req, res) => {
    await waitTime(800);
    res.send(latestPrice);
  },
  'POST /api/profile/ticker-series': async (req, res) => {
    await waitTime(800);
    res.send(tickerSeries);
  },
};
