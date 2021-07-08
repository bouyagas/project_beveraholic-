import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import alertReducer from "./alert/alertReducer";
import beverageReducer from "./beverage/beverageReducer";

export default combineReducers({ alertReducer, authReducer, beverageReducer });
