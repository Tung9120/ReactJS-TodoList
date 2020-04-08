import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component{
  constructor(){
    super();
    this.TodoItem = [
      {title: 'Learn ES6', isComplete: true},
      {title: 'Learn Express', isComplete: true},
      {title: 'Learn React'}
    ];
  }

  render(){
    return(
      <div className="App">
        { this.TodoItem.length 
          ? this.TodoItem.map((item, index) => <TodoItem key={index} item={item} />)
          : <p>Nothing here.</p>
        }
      </div>
    );
  }
}

export default App;
