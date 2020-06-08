import TRouteInfo from './abstractions/types/TRouteInfo';

import Home from '../views/Home/Home';
import Chart from '../views/Chart/Chart';

import NotFound from '../views/NotFound/NotFound';

import Client from '../layouts/Client/Client';

export const HomeRoute: TRouteInfo = {
  name: 'Home',
  path: '/',
  exact: true,
  Page: Home,
  Layout: Client,
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
  Page: Chart,
  Layout: Client,
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
  Page: NotFound,
  Layout: Client,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}