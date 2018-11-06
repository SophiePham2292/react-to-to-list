import React from "react";
import classes from "./InputTask.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputTask = props => (
  <div className={classes.InputTask}>
    <input
      placeholder="What needs to be done?"
      onKeyDown={props.addedTask}
      className={classes.Input}
      onChange={props.inputTask}
      type="text"
    />
    {/* <div onClick={props.addedTask}>OK</div> */}
    {/* <div className={classes.Cancel} onClick={props.cancelledTask}>
      <FontAwesomeIcon icon={faTimes} />
    </div> */}
  </div>
);

export default InputTask;
