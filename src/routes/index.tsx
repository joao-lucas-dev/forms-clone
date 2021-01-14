import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Test from '../pages/Test';
import Success from '../pages/Success';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Test} />
    <Route path="/success" component={Success} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
