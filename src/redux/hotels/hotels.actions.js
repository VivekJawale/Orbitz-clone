import {
  GET_HOTELS_ERROR,
  GET_HOTELS_LOADING,
  GET_HOTELS_SUCCESS,
} from "./hotels.types";
import axios from "axios";
export const getHotels = () => async (dispatch) => {
  dispatch({ type: GET_HOTELS_LOADING });
  try {
    let response = await axios.get(
      "https://venomous-plough-7848.vercel.app/api/hotels"
    );
    dispatch({ type: GET_HOTELS_SUCCESS, payload: response.data });

    return response.data;
  } catch (e) {
    dispatch({ type: GET_HOTELS_ERROR });
  }
};
