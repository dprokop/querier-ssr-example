import { sagaMiddleware } from 'app/data/store';
import routes, { FlokkMatchedRoute } from 'app/routes';
import { MatchedRoute, matchRoutes } from 'react-router-config';
import { Store } from 'redux';
import { all, call } from 'redux-saga/effects';
import Querier, { QuerierQuery, QuerierQueryDescriptor, buildQueryKey } from 'querier';

const getQueriesFromRoutes = <P>(matchedRoutes: Array<MatchedRoute<P>>) => {
  // tslint:disable-next-line
  let queries: Array<QuerierQueryDescriptor<any>> = [];

  // tslint:disable-next-line
  matchedRoutes.map((matchedRoute: FlokkMatchedRoute<P, any, any>) => {
    const { route, match } = matchedRoute;

    if (route.initialData) {
      const params = match.params;
      const routeQueries = route.initialData.inputQueries;
      if (routeQueries) {
        for (let routeQueryKey in routeQueries) {
          if (routeQueryKey) {
            // tslint:disable-next-line
            let query: QuerierQuery<any>;
            let queryKey: string;

            const queryToApply = routeQueries[routeQueryKey].query;
            const effects = routeQueries[routeQueryKey].resultActions;
            query = () => queryToApply(params);
            queryKey = buildQueryKey(queryToApply, params);

            queries = queries.concat([{
              query,
              queryKey,
              props: params,
              effects,
              hot: !!(routeQueries[routeQueryKey].hot),
            }]);
          }
        }
      }
    }
  });

  return {
    queries,
  };
};

const resolveInitialDataSaga = (url: string, store: Store<{}>) => function* resolve() {
  const querier = new Querier({}, store.dispatch);

  // Collect all queries from matched routes and send them to fetch required data
  const matchedRoutes = matchRoutes(routes, url);
  const { queries } = getQueriesFromRoutes(matchedRoutes);
  const queryCalls = queries.map((query) => {
    return call(querier.sendQuery, query);
  });

  yield all(queryCalls);

  return querier;

};

const resolveInitialData = (url: string, store: Store<{}>) => {
  // TODO: handle exceptions in a more sophisticated way
  if (url === '/error' || url === '/404') {
    return Promise.resolve();
  }

  return sagaMiddleware.run(resolveInitialDataSaga(url, store)).done;
};

export default resolveInitialData;
