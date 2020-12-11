import React from "react";
import { logout } from "_services/auth/authActions";
import { useDispatch } from "react-redux";
import {useTranslation} from 'react-i18next';

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const removeCookie = () => {
    dispatch(logout());
  }
  return (
    <div>
      <h1 className="font-weight-300">{t('Account.page')}</h1>
      <button onClick={removeCookie} >Logout</button>
    </div>
  );
};

export default Account;
