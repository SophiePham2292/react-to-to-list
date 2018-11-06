import React from "react";
import classes from "./ListItem.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = props => {
  let checkIconClass = [classes.Check];
  let checkTitleClass = [classes.Title];
  if (props.done) {
    checkIconClass.push(classes.IconDone);
    checkTitleClass.push(classes.TitleDone);
  }
  return (
    <li className={classes.ListItem}>
      <div onClick={props.checkTask} className={checkIconClass.join(" ")}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <p
        onDoubleClick={props.changeListTitle}
        className={checkTitleClass.join(" ")}
      >
        {props.title}
      </p>
      {/* <select
      onChange={props.changePriority}
      value={props.priority}
      className={classes.Priority}
    >
      <option value="3">High</option>
      <option value="2">Medium</option>
      <option value="1">Low</option>
      <option value="0">Done</option>
    </select> */}
      {props.showChangeTitle ? (
        <input
          className={classes.TitleInputChange}
          type="text"
          value={props.title}
          onChange={props.changeTitle}
          onKeyDown={props.enterChangeTitle}
        />
      ) : null}

      <div style={{ cursor: "pointer" }} onClick={props.deletedTask}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </li>
  );
};

export default ListItem;
