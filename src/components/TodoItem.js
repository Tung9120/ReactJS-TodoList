import React from "react";
import "./TodoItem.css";
import classNames from "classnames";
import check from "../img/check.svg";
import checked from "../img/checked.svg";

class TodoItem extends React.Component {

  render() {
    const { item, onClick } = this.props;
    let url = check;
    if(item.isComplete){
      url = checked;
    }

    return (
      <div className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })} 
      >
        <img src={url} onClick={onClick} />
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
