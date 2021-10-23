import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './login';
import Dashboard from './dashboard';
import NotFound from './not-found';

interface RoutesProps {}

const Routes: React.FunctionComponent<RoutesProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
