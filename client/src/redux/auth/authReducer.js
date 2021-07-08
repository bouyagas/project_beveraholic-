import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_IN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from "./authTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticate: null,
  loading: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticate: true,
        loading: false,
        user: payload,
      };

    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticate: true,
        loading: false,
      };
    case SIGN_UP_FAIL:
    case SIGN_IN_FAIL:
    case SIGN_OUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticate: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
