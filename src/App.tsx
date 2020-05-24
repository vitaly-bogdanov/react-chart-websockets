import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from './config/routes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import chartPiesThunk from './redux/middlewares/chartPiesThunk';

const App: FunctionComponent<{loadChartData(): void}> = props => {
  useEffect(() => {
    props.loadChartData();
  }, []);

  return (
    <Switch>
      {
        Object.values(routes).map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path} 
              exact={route.exact}
              component={route.component}
            />
          ) 
        })
      }
      <Redirect to='/page-not-found'/>
    </Switch>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadChartData: () => dispatch(chartPiesThunk())
})

export default connect(null, mapDispatchToProps)(App);
