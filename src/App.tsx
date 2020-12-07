import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from "./pokemon/Pokemon";
import Users from "./users/Users";
import Post from "./post/Post";
import Login from "./login/Login";

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
          </ul>
        </nav>

        <Switch>
          <Route path="/post" exact>
            <Post />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/" exact>
            <Pokemon />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
