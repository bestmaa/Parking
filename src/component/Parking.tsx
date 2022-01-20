import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParkingArea } from "../action/parkingaction";
import Area from "./Area";

function Parking() {
  let dispatch = useDispatch();
  const { data, earn } = useSelector((state: any) => state.parkingDeitals);
  useEffect(() => {
    dispatch(setParkingArea());
  }, []);
  function changeArea(e: any) {
    // console.log(e.target.value);
    dispatch(setParkingArea(e.target.value));
  }
  return (
    <>
      <div className="parkingAllarea">
        <div className="box1">
          <h1>Today Total Revenue:${earn}</h1>
        </div>
        <div className="box2">
          <h1>
            Totle Parking Area{" "}
            <input
              type="number"
              onInput={changeArea}
              value={data.length}
              style={{ width: "50px", padding: "10px" }}
            />
          </h1>
          <p>
            <b>Note:</b> If you increase or decrease the parking area, then all
            the parking data will be reload automatically, so before deleting
            it, make sure that no vehicle is parked in your parking lot.
          </p>
        </div>
      </div>
      <div className="parkingAllarea">
        {data?.map((d: any, i: any) => (
          <Area data={d} key={i} />
        ))}
      </div>
    </>
  );
}

export default Parking;
