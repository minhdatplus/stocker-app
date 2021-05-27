import fakeCompanyScore from './fakeCompanyScore.json';
import fakeLatestScore from './fakeLatestPrice.json';
import fakeTickerSeries from './fakeTickerSeries.json';

export async function getCompanyScoreService() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeCompanyScore);
    }, 600);
  });
}

export async function getLatestPriceService() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeLatestScore);
    }, 600);
  });
}

export async function getTickerSeriesService() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeTickerSeries);
    }, 600);
  });
}
