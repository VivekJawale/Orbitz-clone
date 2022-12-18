import {
  ADD_ADULT,
  ADD_CHILDREN,
  CREATE_ROOM,
  REMOVE_ROOM,
  SET_CHECKIN,
  SET_CHECKOUT,
  SET_ROOMTYPE,
  SINGLE_HOTEL_LOADING,
  SINGLE_HOTEL_PHOTOS,
  SINGLE_HOTEL_SUCCESS,
  SUB_ADULT,
  SUB_CHILDREN,
} from "./singleHotel.types";
import axios from "axios";

const host = "https://venomous-plough-7848.vercel.app/api";

export const getSingleHotelData = (id) => async (dispatch) => {
  dispatch({ type: SINGLE_HOTEL_LOADING });
  try {
    let res = await axios.get(`${host}/hotels/${id}`);
    dispatch({ type: SINGLE_HOTEL_SUCCESS, data: res.data });
    let photos = await axios.get(`${host}/hotelphotos`);
    dispatch({ type: SINGLE_HOTEL_PHOTOS, pictures: photos.data });
    return { message: "Success" };
  } catch (e) {
    return e;
  }
};

export const createRoom = () => {
  return { type: CREATE_ROOM };
};
export const deleteRoom = (id) => {
  return { type: REMOVE_ROOM, id };
};
export const addAdult = (id) => {
  return { type: ADD_ADULT, id };
};
export const subAdult = (id) => {
  return { type: SUB_ADULT, id };
};
export const addChildren = (id) => {
  return { type: ADD_CHILDREN, id };
};
export const subChildren = (id) => {
  return { type: SUB_CHILDREN, id };
};
export const setCheckIn = (date) => {
  return { type: SET_CHECKIN, date };
};
export const setCheckOut = (date) => {
  return { type: SET_CHECKOUT, date };
};
export const setRoomType = (room, price, value) => {
  value = value === "0" ? false : true;
  return { type: SET_ROOMTYPE, room, price, refundable: value };
};
