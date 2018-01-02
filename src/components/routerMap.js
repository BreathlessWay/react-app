import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routers from '../routers';

const routeMap = (routers) => (
  <Switch>
    {
      routers.map((route, i) => {
        if (route.routes) {
          return (<Route
            key={ i }
            path={ route.path }
            exact={ route.exact }
            render={ props => (
              <article className='container-flud'>
                <route.component { ...props }/>
                <Switch>
                  { routeMap(route.routes) }
                </Switch>
              </article>
            ) }
          />);
        } else {
          return (
            <Route
              exact={ route.exact }
              path={ route.path }
              component={ route.component }
              key={ i }
            />
          );
        }
      }) }
  </Switch>
);
export default routeMap(routers);
