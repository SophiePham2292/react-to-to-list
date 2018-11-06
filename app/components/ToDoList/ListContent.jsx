import React from "react";
import ListItem from "./ListItem";
import classes from "./ListContent.css";

const listContent = props => {
  let renderList = [];
  if (props.activeTab === 0) {
    renderList = props.listData;
  }
  if (props.activeTab === 1) {
    renderList = props.listData.filter(item => item.done === false);
  }
  if (props.activeTab === 2) {
    renderList = props.listData.filter(item => item.done === true);
  }
  const listItemElements = renderList.map((listItem, index) => {
    return (
      <ListItem
        key={index}
        title={listItem.title}
        priority={listItem.priority}
        done={listItem.done}
        deletedTask={() => props.deletedTask(index)}
        checkTask={() => props.checkTask(index)}
        changePriority={e => props.changePriority(index, e)}
        changeListTitle={e => props.changeListTitle(index, e)}
        showChangeTitle={listItem.showChangeTitle}
        changeTitle={e => props.changeTitle(index, e)}
        enterChangeTitle={e => props.enterChangeTitle(index, e)}
      />
    );
  });
  return <ul className={classes.ListContent}>{listItemElements}</ul>;
};

export default listContent;
