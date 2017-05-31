import React from 'react';

import { Route, Redirect } from 'react-router';

import dashboard from './dashboard';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={dashboard} />
    </div>
  );
};

export default Routes;
