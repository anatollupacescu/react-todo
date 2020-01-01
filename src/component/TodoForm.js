import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoObject from '../domain/todo';

export default function TodoForm(props) {
  
  let [todoObject] = useState(new TodoObject(props.items))

  let [todoText, setInput] = useState("");

  let handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  let submitForm = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) { /* Enter key pressed */
      let added = todoObject.addItem(todoText);
      if (!added) {
        alert('we got a duplicate!')
        return
      }
      setInput("")
    }
  }
  
  let [count, setCount] = useState(0) // to allow updates in child component to re-render parent

  return (
  <div>
    <h3>New item</h3>
    <div>
      <input type="text" onKeyUp={submitForm} onChange={handleChange} value={todoText} />
    </div>
    <div>
      <h2>Todos:</h2>
      <ol>
        {todoObject.items.map((item, i) => (
          <div key={i}>
            <TodoItem
              item={item}
              todoObject={todoObject}
              triggerRender={() => setCount(count + 1)} />
          </div>
        ))}
      </ol>
    </div>
  </div>);
}
