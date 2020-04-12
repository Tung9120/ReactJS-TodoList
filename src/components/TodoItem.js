import React from "react";
import "./TodoItem.css";
import classNames from "classnames";

class TodoItem extends React.Component {

  render() {
    const { item, onClick } = this.props;
    return (
      <div className={classNames("TotoItem", {
          "TodoItem-complete": item.isComplete,
        })} onClick={onClick}
      >
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
