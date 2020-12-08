import {
  AuthDispatchTypes,
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_SUCCESS,
} from "./authTypes";

interface DefaultStateInterface {
  loading: boolean;
  token?: string;
}

const defaultState: DefaultStateInterface = {
  loading: false,
};

const authReducer = (
  state: DefaultStateInterface = defaultState,
  action: AuthDispatchTypes
): DefaultStateInterface => {
  switch (action.type) {
    case AUTH_FAIL:
      return {
        loading: false,
      };
    case AUTH_LOADING:
      return {
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        loading: false,
        token: action.payload.token,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
