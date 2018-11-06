import React, { Component } from "react";
import classes from "./AppHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default class AppHeader extends Component {
  render() {
    return (
      <div className={classes.AppHeader}>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <h4 style={{ margin: "0" }}>To do list</h4>
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    );
  }
}
