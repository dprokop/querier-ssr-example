import { History } from 'history';
import createBrowserHistory from 'history/createBrowserHistory';

let flokkHistory: History;

export const history = (): History => {
  if (!flokkHistory) {
    flokkHistory = createBrowserHistory();
  }

  return flokkHistory;
};

export const navigateTo = (url: string) => {
  history().push(url);
};
