import HomePageRoute, { homePageQueries } from 'app/components/HomePage';
import OrganisationPageRoute, { organisationPageQueries } from 'app/components/OrganisationPage';
import ErrorPage from 'components/error/ErrorPage';
import NotFoundPage from 'components/error/NotFoundPage';
import { MatchedRoute, RouteConfig } from 'react-router-config';
import { DataDependencyDefinition } from 'querier';

export interface FlokkRouteConfig<P, TInputQueries, TActionQueries> extends RouteConfig {
  initialData?: DataDependencyDefinition<P, TInputQueries, TActionQueries>;
  routes?: Array<FlokkRouteConfig<{}, {}, {}>>;
}

export interface FlokkMatchedRoute<P,  TInputQueries, TActionQueries> extends MatchedRoute<P> {
  route: FlokkRouteConfig<P, TInputQueries, TActionQueries>;
}

const routes = [
  {
    component: HomePageRoute,
    path: '/',
    exact: true,
    initialData: homePageQueries
  },
  {
    component: OrganisationPageRoute,
    path: '/organisation/:orgName',
    exact: true,
    initialData: organisationPageQueries,
  },
  {
    component: ErrorPage,
    path: '/error',
    exact: true
  },
  {
    component: NotFoundPage,
    path: '/404',
    exact: true
  }
];

export default routes;
