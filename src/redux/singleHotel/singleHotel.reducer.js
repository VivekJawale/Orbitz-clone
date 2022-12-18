import {
  ADD_ADULT,
  ADD_CHILDREN,
  CREATE_ROOM,
  REMOVE_ROOM,
  SET_CHECKIN,
  SET_CHECKOUT,
  SET_ROOMTYPE,
  SINGLE_HOTEL_ERROR,
  SINGLE_HOTEL_LOADING,
  SINGLE_HOTEL_PHOTOS,
  SINGLE_HOTEL_SUCCESS,
  SUB_ADULT,
  SUB_CHILDREN,
} from "./singleHotel.types";
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) dd = "0" + dd;

if (mm < 10) mm = "0" + mm;

let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
let dd1 = tomorrow.getDate();
let mm1 = tomorrow.getMonth() + 1;
let yyyy1 = tomorrow.getFullYear();

if (dd1 < 10) dd1 = "0" + dd1;

if (mm1 < 10) mm1 = "0" + mm1;
const initState = {
  loading: false,
  error: false,
  data: {},
  pictures: [],
  rooms: [
    {
      adults: 2,
      children: 0,
    },
  ],
  checkin: `${yyyy}-${mm}-${dd}`,
  checkout: `${yyyy1}-${mm1}-${dd1}`,
  roomType: {},
  price: 0,
  refundable: false,
};

export const singleHotelReducer = (state = initState, action) => {
  switch (action.type) {
    case SINGLE_HOTEL_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SINGLE_HOTEL_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    }
    case SINGLE_HOTEL_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case SINGLE_HOTEL_PHOTOS: {
      // console.log(action,1)
      return {
        ...state,
        loading: false,
        error: false,
        pictures: action.pictures,
      };
    }
    case CREATE_ROOM: {
      return {
        ...state,
        rooms: [
          ...state.rooms,
          {
            adults: 1,
            children: 0,
          },
        ],
      };
    }
    case REMOVE_ROOM: {
      let updatedRooms = state.rooms.filter((ele, i) => i !== action.id);
      return {
        ...state,
        rooms: updatedRooms,
      };
    }
    case ADD_ADULT: {
      let updatedRooms = state.rooms.map((ele, i) => {
        if (i === action.id) {
          ele = { ...ele, adults: ele.adults + 1 };
          return ele;
        } else return ele;
      });
      return {
        ...state,
        rooms: updatedRooms,
      };
    }
    case ADD_CHILDREN: {
      let updatedRooms = state.rooms.map((ele, i) => {
        if (i === action.id) {
          ele = { ...ele, children: ele.children + 1 };
          return ele;
        } else return ele;
      });
      return {
        ...state,
        rooms: updatedRooms,
      };
    }
    case SUB_ADULT: {
      let updatedRooms = state.rooms.map((ele, i) => {
        if (i === action.id) {
          ele = { ...ele, adults: ele.adults - 1 };
          return ele;
        } else return ele;
      });
      return {
        ...state,
        rooms: updatedRooms,
      };
    }
    case SUB_CHILDREN: {
      let updatedRooms = state.rooms.map((ele, i) => {
        if (i === action.id) {
          ele = { ...ele, children: ele.children - 1 };
          return ele;
        } else return ele;
      });
      return {
        ...state,
        rooms: updatedRooms,
      };
    }
    case SET_CHECKIN: {
      return {
        ...state,
        checkin: action.date,
      };
    }
    case SET_CHECKOUT: {
      return {
        ...state,
        checkout: action.date,
      };
    }
    case SET_ROOMTYPE: {
      return {
        ...state,
        roomType: action.room,
        price: action.price,
        refundable: action.refundable,
      };
    }
    default: {
      return state;
    }
  }
};
