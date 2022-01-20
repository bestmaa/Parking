import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import red from "../image/red.png";
import green from "../image/green.png";
import "./area.css";
import { useDispatch } from "react-redux";
import { checkOut, earn, newEntry } from "../action/parkingaction";
import Timer from "./Timer";
function $$(sel: any) {
  return document.querySelector(sel);
}
function Area({ data }: { data: any }) {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  function iAction() {
    let fname = $$(`.fullName${data.id}`).value;
    let cname = $$(`.carnumber${data.id}`).value;
    let mno = $$(`.mobilenumber${data.id}`).value;
    if (fname.length > 0 && cname.length > 0 && mno.length > 9) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  function Booked() {
    if (!data.bookThisArea) {
      let fname = $$(`.fullName${data.id}`).value;
      let cname = $$(`.carnumber${data.id}`).value;
      let mno = $$(`.mobilenumber${data.id}`).value;
      let carDeatils = {
        carNumber: cname,
        Time: new Date().toDateString(),
        mobileNumber: mno,
        name: fname,
      };
      dispatch(newEntry(carDeatils, data.id));
    } else {
      let pay = prompt("Pay $", "10");
      if (Number(pay) >= 10) {
        dispatch(checkOut(data.id));
        $$(`.fullName${data.id}`).value = null;
        $$(`.carnumber${data.id}`).value = null;
        $$(`.mobilenumber${data.id}`).value = null;
        dispatch(earn(Number(pay)));
        alert("thanks for coming to my parking lot");
      } else {
        alert("minimum pay $10");
      }
    }
  }
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <Front data={data} />
          <div className="flip-card-back">
            <fieldset>
              <legend>About Information</legend>
              <table>
                <tbody className="table1">
                  <RowAndCol
                    name="Full name:"
                    clName={`fullName${data.id}`}
                    iAction={iAction}
                    booked={data.bookThisArea}
                  />
                  <RowAndCol
                    name="Car No.:"
                    clName={`carnumber${data.id}`}
                    iAction={iAction}
                    booked={data.bookThisArea}
                  />
                  <RowAndCol
                    name="Mobile:"
                    clName={`mobilenumber${data.id}`}
                    iAction={iAction}
                    booked={data.bookThisArea}
                  />
                  <RowAndCol name="Time:" clName="time" />
                </tbody>
              </table>
            </fieldset>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={Booked}
              disabled={open}
            >
              {data.bookThisArea ? <>Check Out And Pay</> : <> Book Now</>}
            </Button>
            {/* <Timer /> */}
            {data.bookThisArea ? <Timer /> : ""}
            {open && <p>Enter 10 digit mobile number after button able</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;

function Front({ data }: { data: any }) {
  return (
    <div className="flip-card-front">
      <Card sx={{ width: 300, height: 300 }}>
        <CardContent>
          <p>
            parking code : {data.areaUnicNumber}{" "}
            <img
              src={data.bookThisArea ? red : green}
              alt="green"
              style={{ width: "20px" }}
            />
          </p>
          {!data.bookThisArea && <h1>{data.id}</h1>}
          <h2>
            {data.bookThisArea ? (
              <b style={{ color: "red" }}>Booked Area</b>
            ) : (
              <>Open Area</>
            )}{" "}
          </h2>
        </CardContent>
        <CardActions>
          <div style={{ textAlign: "center", width: "100%" }}>
            <Button size="small" variant="outlined">
              {data.bookThisArea ? <>Check Out And Pay</> : <> Book Now</>}
            </Button>
            {data.bookThisArea ? <Timer /> : ""}
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

function RowAndCol({
  name,
  clName,
  iAction,
  booked,
}: {
  name: any;
  clName: any;
  iAction?: any;
  booked?: any;
}) {
  // const []=useState()
  return (
    <>
      <tr style={{ marginTop: "10px" }}>
        <td>
          <label>{name}</label>
        </td>
        <td>
          {clName === "time" ? (
            new Date().toDateString()
          ) : (
            <input
              type="text"
              className={clName}
              onInput={iAction}
              disabled={booked}
            />
          )}
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </>
  );
}
