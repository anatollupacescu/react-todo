import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  render() {
    const items = [
      { text: "Learn JavaScript", done: false },
      { text: "Learn React", done: false },
      { text: "Play around in JSFiddle", done: true },
      { text: "Build something awesome", done: true }
    ]
    const todoObject = new TodoObject(items)
    return (
      <TodoForm todoObject={todoObject} />
    )
  }
}

export default App;
