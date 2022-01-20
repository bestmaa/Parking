import React, { useEffect, useState } from "react";

function Timer() {
  const [SS, setSS] = useState(0);
  const [MM, setMM] = useState(0);
  const [HH, setHH] = useState(0);

  useEffect(() => {
    let interval=setInterval(() => {
      setSS(SS + 1);
    }, 1000);
    if (SS >= 60) {
      setSS(0);
      setMM(MM + 1);
    }
    if (MM >= 60) {
      setSS(0);
      setMM(HH + 1);
    }
    return ()=>clearInterval(interval)
  }, [SS, MM, HH]);
  function startTime() {
   
  }

  return (
    <div>
      <h2>{HH}:{MM}:{SS}</h2>
    </div>
  );
}

export default Timer;
