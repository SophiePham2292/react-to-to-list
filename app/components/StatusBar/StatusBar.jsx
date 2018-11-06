import React from "react";
import classes from "./StatusBar.css";

const StatusBar = props => {
  return (
    <div className={classes.StatusBar}>
      <div>{props.itemsLeft} items left</div>
      <div className={classes.Filter}>
        <div
          onClick={e => props.changeTab(0)}
          className={props.activeTab === 0 ? classes.ActiveTab : null}
        >
          All
        </div>
        <div
          onClick={e => props.changeTab(1)}
          className={props.activeTab === 1 ? classes.ActiveTab : null}
        >
          Active
        </div>
        <div
          onClick={e => props.changeTab(2)}
          className={props.activeTab === 2 ? classes.ActiveTab : null}
        >
          Completed
        </div>
      </div>
      <div onClick={props.clearComplete}>Clear completeted</div>
    </div>
  );
};

export default StatusBar;
