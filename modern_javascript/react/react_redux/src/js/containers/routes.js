import React from 'react';
import { Router, Route, Redirect, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Dashboard from './Dashboard';

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <div>
      <Route path="/" component={Dashboard}/>
    </div>
  </Router>
);

export default routes;
