import React from "react";
import { logout } from "_services/auth/authActions";
import { useDispatch } from "react-redux";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const removeCookie = () => {
    dispatch(logout());
  }
  return (
    <div>
      <h1 className="font-weight-300">Account page</h1>
      <button onClick={removeCookie} >Logout</button>
    </div>
  );
};

export default Account;
