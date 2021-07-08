import {
  GET_BEVERAGES,
  BEVERAGE_ERROR,
  DELETE_BEVERAGE,
  ADD_BEVERAGE,
  GET_BEVERAGE,
} from "./beverageTypes";

const initialState = {
  beverages: [],
  beverage: null,
  loading: true,
  error: {},
};

const beverageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BEVERAGES:
      return {
        ...state,
        beverages: payload,
        loading: false,
      };
    case GET_BEVERAGE:
      return {
        ...state,
        beverage: payload,
        loading: false,
      };
    case ADD_BEVERAGE:
      return {
        ...state,
        beverages: [payload, ...state.beverages],
        loading: false,
      };
    case DELETE_BEVERAGE:
      return {
        ...state,
        beverages: state.beverages.filter(
          (beverage) => beverage._id !== payload
        ),
        loading: false,
      };
    case BEVERAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default beverageReducer;
