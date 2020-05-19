import React, { Fragment } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { HomeRoute, ChartRoute } from '../../config/routes';
import TRouteInfo from '../../config/abstractions/types/TRouteInfo';
import classes from './client.module.scss';

const Client: React.FC = props => {
  let navs: TRouteInfo[] = [HomeRoute,  ChartRoute];

  return (
    <Fragment>
      <header>
        <Navbar navs={navs} />
      </header>
      <main className={[classes.Main].join(' ')}>
        {props.children}
      </main>
      <footer> 

      </footer>
    </Fragment>
  )
}

export default Client;