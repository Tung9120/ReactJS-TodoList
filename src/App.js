import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
      { title: "Learn ES6", isComplete: true },
      { title: "Learn Express", isComplete: true },
      { title: "Learn React" }
      ]
    };
  }

  onItemClicked(item){
    return (event) => {
      const { isComplete } = item;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)} />
          ))}
        {todoItems.length === 0 && <p>Nothing here.</p>}
      </div>
    );
  }
}

export default App;
