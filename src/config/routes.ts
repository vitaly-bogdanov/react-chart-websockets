import TRouteInfo from './abstractions/types/TRouteInfo';

import Home from '../views/Home/Home';
import Chart from '../views/Chart/Chart';

import NotFound from '../views/NotFound/NotFound';

export const HomeRoute: TRouteInfo = {
  name: 'Home',
  path: '/',
  exact: true,
  component: Home,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}

export const ChartRoute: TRouteInfo = {
  name: 'Chart',
  path: '/chart',
  exact: false,
  component: Chart,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}

export const NotFoundRoute: TRouteInfo = {
  name: 'Page not found',
  path: '/page-not-found',
  exact: false,
  component: NotFound,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}