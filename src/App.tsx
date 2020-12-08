import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Account from "./account/Account";
import PrivateRouter from "_components/PrivateRoute";
import { routes } from './routes';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <PrivateRouter path="/account" component={Account} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
