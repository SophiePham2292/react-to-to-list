import React from "react";
import classes from "./ListHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var days = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];

const listHeader = props => {
  return (
    <div className={classes.ListHeader}>
      <div className={classes.Date}>{props.date.getDate().toString()}</div>
      <div className={classes.MonthDay}>
        <div>{months[props.date.getMonth()]}</div>
        <div>{days[props.date.getDay()]}</div>
      </div>
    </div>
  );
};

export default listHeader;
