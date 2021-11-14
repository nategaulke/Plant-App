import React, { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "./Sidebar";
moment().format();
console.log(moment());

export const CountdownMonths = ({ num, freq }) => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [targetTime, setTargetTime] = useState(
    moment().add(parseInt(num), freq.toString())
  );
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeBetween.months() > 0 ? (
    <>
      <p className="counter">
        <p>Next watering in </p>
        <span>{timeBetween.months()} months and </span>
        <span>{timeBetween.days()} days </span>
      </p>
    </>
  ) : (
    <>
      <p className="counter">
        <p>Next watering in </p>
        <span>{timeBetween.days()} days </span>
      </p>
    </>
  );
};

export default CountdownMonths;
