import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import tick from "./img/tick.svg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
      { title: "Learn ES6", isComplete: true },
      { title: "Learn Express", isComplete: true },
      { title: "Learn React" }
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      if(!text){return;}

      text = text.trim();
      if(!text){return;}

      this.setState({
          newItem: '',
          todoItems: [
              {title: text, isComplete: false},
              ...this.state.todoItems
          ]
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
            <img src={tick} width={30} height={30} alt="tick" />
            <input 
            type="text" 
            placeholder="Write somthing ..." 
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}
            value={newItem} />
        </div>
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
