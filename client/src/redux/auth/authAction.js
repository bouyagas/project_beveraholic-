import axios from "axios";
import { setAlert } from "../alert/alertAction";
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  AUTH_ERROR,
  USER_LOADED,
} from "./authTypes";

import setAuthToken from "../../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:5000/api/user");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const signUpUser = ({ username, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/register",
      body,
      config
    );
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({ type: SIGN_UP_FAIL });
  }
};

export const signInUser = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/login",
      body,
      config
    );
    dispatch({ type: SIGN_IN_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
    dispatch({ type: SIGN_IN_FAIL });
  }
};

export const signOutUser = () => (dispatch) => {
  dispatch({ type: SIGN_OUT_SUCCESS });
};
