import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import classes from './navbar.module.scss';
import TRouteInfo from '../../config/abstractions/types/TRouteInfo';

interface Props {
  navs: TRouteInfo[]
}

const Navbar: FC<Props> = props => {
  return (
    <AppBar color='primary'>
      <Toolbar>
        <Container maxWidth='md'>
          {
            props.navs.map((nav: TRouteInfo, index: number) => {
              return (
                <NavLink key={index} className={classes.Link} to={nav.path} exact={nav.exact}>
                  <strong>{nav.name}</strong>
                </NavLink>
              )
            })
          }
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;