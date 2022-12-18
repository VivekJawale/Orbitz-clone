import {
  GET_HOTELS_ERROR,
  GET_HOTELS_LOADING,
  GET_HOTELS_SUCCESS,
} from "./hotels.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const hotelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HOTELS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_HOTELS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_HOTELS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
