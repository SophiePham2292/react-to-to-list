import React, { Component } from "react";
import classes from "./App.css";
import ToDoList from "./ToDoList";
import AppHeader from "../containers/AppHeader/AppHeader";

export default class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        {/* <AppHeader /> */}
        <ToDoList />
      </div>
    );
  }
}
