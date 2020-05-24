import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundRoute, HomeRoute } from '../../config/routes';
import Container from '@material-ui/core/Container';

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <header></header>
        <main>
          <Container maxWidth='sm'>
            <p>{NotFoundRoute.name}</p>
            <Link to={HomeRoute.path}>To {HomeRoute.name}</Link>
          </Container>
        </main>
        <footer></footer>
      </Fragment>
    );
  }
}

export default NotFound;