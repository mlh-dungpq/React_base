import { Dispatch } from "redux";
import cookie from "js-cookie";
import { AuthDispatchTypes, AUTH_FAIL, AUTH_SUCCESS } from "./authTypes";
import { AuthApi } from "./authApi";
import axios from "_utils/axios";

export interface LoginForm {
  email: string;
  password: string;
}

export const login = (data: LoginForm) => async (
  dispatch: Dispatch<AuthDispatchTypes>
) => {
  try {
    const res = await axios.post(AuthApi.LOGIN, data);
    cookie.set("token", res.data?.token || null);
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_FAIL,
    });
  }
};

export const logout = () =>(
  dispatch: Dispatch<AuthDispatchTypes>
) => {
  cookie.remove('token');
  dispatch({
    type: AUTH_FAIL,
  });
}
