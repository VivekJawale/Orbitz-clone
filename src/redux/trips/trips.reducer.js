import { GET_TRIPS_ERROR, GET_TRIPS_LOADING, GET_TRIPS_SUCCESS } from "./trips.types";

const initState = {
    loading: false,
    error: false,
    trips: []
}

export const tripsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TRIPS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_TRIPS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case GET_TRIPS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                trips: action.trips
            }
        }
        default: {
            return state;
        }
    }
}