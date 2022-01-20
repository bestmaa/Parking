import {
  BOOK_AREA,
  CHECK_OUT,
  DEFINE_PARKING_AREA,
  EARN_MONEY,
} from "../const/parkingconst";

export const setParkingArea =
  (totleParkingArea = 50) =>
  async (dispatch: any) => {
    let createParkingArea: any = [];
    for (let i = 0; i < totleParkingArea; i++) {
      createParkingArea = [
        ...createParkingArea,
        {
          id: i,
          areaUnicNumber: new Date().getUTCMilliseconds()+i,
          bookThisArea: false,
        },
      ];
    }
    dispatch({ type: DEFINE_PARKING_AREA, payload: createParkingArea });
  };
interface carDeatils {
  carNumber: string;
  Time: string;
  mobileNumber: number;
  name:string;
}

export const newEntry =
  (carDeatils: carDeatils, areaId: any ) =>
  (dispatch: any) => {
    dispatch({ type: BOOK_AREA, payload: { carDeatils, areaId } });
  };
export const checkOut =
  (areaId: any) =>
  (dispatch: any) => {
    dispatch({ type: CHECK_OUT, payload: areaId });
  };
export const earn =
  (earn: any) =>
  (dispatch: any) => {
    dispatch({ type: EARN_MONEY, payload: earn });
  };
