import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Account from "./account/Account";
import PrivateRouter from "_components/PrivateRoute";
import NotFound from "_components/NotFound";
import { routes } from './routes';
import {useTranslation} from 'react-i18next';

function App() {

  const {t, i18n} = useTranslation();
  const handleClick = (languages: string) => {
    i18n.changeLanguage(languages);
  }

  return (
    <Router>
      <div>
        <nav style={{width:'100%', padding:'2rem 0', backgroundColor:'gray', textAlign: 'center'}}>
          <button onClick={() => handleClick('en')}>English</button>
          <button onClick={() => handleClick('ko')}>Korea</button>
          <button onClick={() => handleClick('vi')}>VietNamese</button>
        </nav>
        <nav style={{margin:'4rem'}}>
          <ul>
            <li>
              <Link to="/">{t('Menu.home')}</Link>
            </li>
            <li>
              <Link to="/post">{t('Menu.post')}</Link>
            </li>
            <li>
              <Link to="/users">{t('Menu.users')}</Link>
            </li>
            <li>
              <Link to="/login">{t('Menu.login')}</Link>
            </li>
            <li>
              <Link to="/account">{t('Menu.account')}</Link>
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
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
