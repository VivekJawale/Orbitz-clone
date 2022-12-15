import { car_actions } from './action';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};
export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case car_actions.REQUEST:
      return { ...state, isLoading: true };
    case car_actions.SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case car_actions.FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
