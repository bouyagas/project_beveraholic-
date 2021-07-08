import axios from "axios";
import { setAlert } from "../alert/alertAction";
import {
  GET_BEVERAGES,
  GET_BEVERAGE,
  ADD_BEVERAGE,
  DELETE_BEVERAGE,
  BEVERAGE_ERROR,
} from "./beverageTypes";

export const getBeverages = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/beverages");

    dispatch({
      type: GET_BEVERAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BEVERAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteBeverage = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/beverages/${id}`);

    dispatch({
      type: DELETE_BEVERAGE,
      payload: id,
    });

    dispatch(setAlert("Beverage Removed", "success"));
  } catch (err) {
    dispatch({
      type: BEVERAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addBeverage = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/beverages",
      formData,
      config
    );

    dispatch({
      type: ADD_BEVERAGE,
      payload: res.data,
    });

    dispatch(setAlert("Beverage Created", "success"));
  } catch (err) {
    dispatch({
      type: BEVERAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getBeverage = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/beverages/${id}`);

    dispatch({
      type: GET_BEVERAGE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BEVERAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
