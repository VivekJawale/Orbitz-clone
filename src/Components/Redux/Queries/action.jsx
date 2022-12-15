
import axios from 'axios';

export const car_actions = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const cars_data_request = () => ({
  type: car_actions.REQUEST,
})

export const cars_data_success = (payload) => ({
  type: car_actions.SUCCESS,
  payload,
});

export const cars_data_failure = () => ({
  type: car_actions.FAILURE,
});

export const fetch_cars_data = (payload) => (dispatch) => {
  dispatch(cars_data_request());
  axios
    .get(`http://localhost:9090/cars`, {
      params: {
        city: payload,
      },
    })
    .then((res) => {
      dispatch(cars_data_success(res.data));
    })
    .catch((err) => {
      dispatch(cars_data_failure());
    });
};
