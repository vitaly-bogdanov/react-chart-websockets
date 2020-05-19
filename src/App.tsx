import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as routes from './config/routes';

const App: FunctionComponent = () => {
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
    </Switch>
  );
}

export default App;
