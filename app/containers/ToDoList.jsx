import React, { Component } from "react";
import classes from "./ToDoList.css";
import ListHeader from "../components/ToDoList/ListHeader";
import ListContent from "../components/ToDoList/ListContent";
import InputTask from "../components/ToDoList/InputTask/InputTask";
import StatusBar from "../components/StatusBar/StatusBar";

const listData = [
  {
    title: "List item 1",
    done: false,
    showChangeTitle: false
  },
  {
    title: "List item 2",
    done: false,
    showChangeTitle: false
  },
  {
    title: "List item 3",
    done: false,
    showChangeTitle: false
  }
];

export default class ToDoList extends Component {
  state = {
    listData: listData,
    inputValue: "",
    date: new Date(),
    activeTab: 0
  };

  handleShowInput = () => {
    this.setState({
      showInput: true
    });
  };

  handleInputTask = e => {
    e.preventDefault();
    const newTask = e.target.value;
    this.setState({
      inputValue: newTask
    });
  };

  handleAddTask = e => {
    if (e.keyCode === 13) {
      const newTask = { title: this.state.inputValue, done: false };
      const newList = [...this.state.listData, newTask];
      this.setState({ listData: newList, inputValue: "" });
      e.target.value = "";
    }
    /* const newTask = { title: this.state.inputTask, priority: 3 };
    const newList = [...this.state.listData, newTask];
    newList.sort(function(item1, item2) {
      if (item1.priority - item2.priority > 0) return -1;
      if (item1.priority - item2.priority < 0) return 1;
      return 0;
    });
    this.setState({ listData: newList, showInput: false }); */
  };

  handleCancelTask = () => {
    this.setState({
      inputValue: ""
    });
  };

  handleCheckTask = index => {
    if (this.state.listData[index].done === false) {
      const newListData = [...this.state.listData];
      const checkTask = newListData.splice(index, 1);
      checkTask[0].done = true;
      newListData.push(checkTask[0]);
      this.setState({
        listData: newListData
      });
    } else {
      const newListData = [...this.state.listData];
      const checkTask = newListData.splice(index, 1);
      checkTask[0].done = false;
      newListData.unshift(checkTask[0]);
      this.setState({ listData: newListData });
    }
  };

  /* handleChangePriority = (index, e) => {
    const newListData = [...this.state.listData];
    const changePriorityTask = newListData.splice(index, 1);

    changePriorityTask[0].priority = parseInt(e.target.value);
    newListData.push(changePriorityTask[0]);
    newListData.sort(function(item1, item2) {
      if (item1.priority - item2.priority > 0) return -1;
      if (item1.priority - item2.priority < 0) return 1;
      return 0;
    });
    console.log(newListData);
    this.setState({
      listData: newListData
    });
  }; */

  handleDeleteTask = index => {
    let changedList = [...this.state.listData];
    changedList.splice(index, 1);
    this.setState({
      listData: changedList
    });
  };

  handleChangeTab = tabIndex => {
    /* if (tabIndex === 0) {
      this.setState({
        filterList: this.state.listData
      });
    }
    if (tabIndex === 1) {
      let list = copyList.filter(listItem => {
        return listItem.done === false;
      });
      console.log(copyList);
      this.setState({ filterList: list });
    }
    if (tabIndex === 2) {
      let list = copyList.filter(listItem => {
        return listItem.done === true;
      });
      console.log(copyList);
      this.setState({ filterList: list });
    } */
    this.setState({
      activeTab: tabIndex
    });
  };

  handleClearComplete = () => {
    let copyList = [...this.state.listData];
    copyList = copyList.filter(item => item.done === false);
    this.setState({
      listData: copyList
    });
  };

  handleChangeListTitle = index => {
    let copyList = [...this.state.listData];
    copyList[index].showChangeTitle = true;
    this.setState({
      listData: copyList
    });
  };

  handleChangeTitle = (index, e) => {
    let copyList = [...this.state.listData];
    copyList[index].title = e.target.value;
    this.setState({
      listData: copyList
    });
  };

  handleEnterChangeTitle = (index, e) => {
    if (e.keyCode === 13) {
      let copyList = [...this.state.listData];
      /* copyList[index].title = e.target.value; */
      copyList[index].showChangeTitle = false;
      this.setState({ listData: copyList });
    }
  };

  render() {
    return (
      <div className={classes.ToDoList}>
        <ListHeader date={this.state.date} showInput={this.handleShowInput} />
        <InputTask
          inputValue={this.state.inputValue}
          inputTask={e => this.handleInputTask(e)}
          addedTask={this.handleAddTask}
          cancelledTask={this.handleCancelTask}
        />
        <ListContent
          activeTab={this.state.activeTab}
          listData={this.state.listData}
          deletedTask={this.handleDeleteTask}
          checkTask={this.handleCheckTask}
          changePriority={this.handleChangePriority}
          changeListTitle={this.handleChangeListTitle}
          changeTitle={this.handleChangeTitle}
          enterChangeTitle={this.handleEnterChangeTitle}
        />
        <StatusBar
          activeTab={this.state.activeTab}
          changeTab={this.handleChangeTab}
          itemsLeft={this.state.listData.length}
          clearComplete={this.handleClearComplete}
        />
      </div>
    );
  }
}
