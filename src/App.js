import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component{
  constructor(){
    super();
    this.TodoItem = [
      'Learn ES6',
      'Learn Express',
      'Learn React'
    ];
  }

  render(){
    return(
      <div className="App">
        {
          this.TodoItem.map((item, index) => <TodoItem key={index} title={item} />)
        }
      </div>
    );
  }
}

export default App;
