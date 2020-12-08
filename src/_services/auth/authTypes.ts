export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export type TokenType = {
  token?: string;
};

export interface AuthLoading {
  type: typeof AUTH_LOADING;
}

export interface AuthFail {
  type: typeof AUTH_FAIL;
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  payload: TokenType;
}

export type AuthDispatchTypes = AuthFail | AuthSuccess | AuthLoading;
