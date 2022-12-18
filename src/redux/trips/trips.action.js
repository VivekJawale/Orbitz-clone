import axios from "axios";
import { GET_HOTELS_ERROR } from "../hotels/hotels.types";
import { GET_TRIPS_LOADING, GET_TRIPS_SUCCESS } from "./trips.types"

const host = 'https://venomous-plough-7848.vercel.app/api';

export const getTrips = (id) => async (dispatch) => {
    dispatch({ type: GET_TRIPS_LOADING });
    try {
        let res = await axios.get(`${host}/bookhotel/user/${id}`);
        dispatch({ type: GET_TRIPS_SUCCESS, trips: res.data.trips });
        return res.data;
    }
    catch (e) {
        dispatch({ type: GET_HOTELS_ERROR });
        return e;
    }
}