import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Pokemon from './pokemon/Pokemon';
import Users from './users/Users';
import Post from './post/Post';

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
          </ul>
        </nav>

        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Pokemon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
