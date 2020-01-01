import React from 'react';

export default function TodoItem(props) {

  let { todoObject, item, triggerRender } = props;

  let boxTicked = () => {  
    todoObject.toggleDone(item);
    triggerRender();
  }

  let className = item.done ? "done" : "";

  return (<li>
    <label>
      <input type="checkbox" defaultChecked={item.done} onChange={boxTicked} />
      <span className={className}>{item.text}</span>
    </label>
  </li>);
}
