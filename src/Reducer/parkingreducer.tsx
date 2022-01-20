import {
  DEFINE_PARKING_AREA,
  BOOK_AREA,
  CHECK_OUT,
  EARN_MONEY,
} from "../const/parkingconst";

export const parkingDeitals = (state = { data: [], earn: 0 }, action: any) => {
  switch (action.type) {
    case DEFINE_PARKING_AREA:
      return { loading: false, data: action.payload, earn: state.earn };
    case BOOK_AREA:
      let newpayload = state.data.map((d: any, i: any) => {
        if (i === action.payload.areaId) {
          return {
            ...d,
            bookThisArea: true,
            carDeatils: action.payload.carDeatils,
          };
        } else {
          return d;
        }
      });
      return { loading: false, data: newpayload, earn: state.earn };
    case CHECK_OUT:
      let checkOutPayLoad = state.data.map((d: any, i: any) => {
        if (i === action.payload) {
          delete d.carDeatils;
          return { ...d, bookThisArea: false };
        } else {
          return d;
        }
      });
      return { loading: false, data: checkOutPayLoad, earn: state.earn };
    case EARN_MONEY:
      return { ...state, earn: state.earn + action.payload };
    default:
      return state;
  }
};
