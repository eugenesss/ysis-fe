import { FunctionComponent } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import LoginPage from './login';
import Dashboard from './dashboard';
import Collections from './collections';
import Settings from './settings';
import NotFound from './not-found';
import { useCookieAuth } from '@app/container/AuthContainer/useCookieAuth';

interface RoutesProps {}

const Routes: FunctionComponent<RoutesProps> = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <Redirect to="/dashboard" />
        </PrivateRoute>
        <PrivateRoute path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/collections" exact>
          <Collections />
        </PrivateRoute>
        <PrivateRoute path="/settings">
          <Settings />
        </PrivateRoute>
        <Route path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

export function PrivateRoute({ children, ...rest }: RouteProps) {
  let auth = useCookieAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
