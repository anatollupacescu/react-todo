import React from 'react';

class TodoItem extends React.Component {

  boxTicked = this.boxTicked.bind(this);

  boxTicked() {
    let { todoObject, item, triggerRender } = this.props;
    todoObject.toggleItemDoneStatus(item);
    triggerRender();
  }

  render() {
    let { item } = this.props;
    let className = item.done ? "done" : "";
    return (<li>
      <label>
        <input type="checkbox" defaultChecked={item.done} onChange={this.boxTicked} />
        <span className={className}>{item.text}</span>
      </label>
    </li>);
  }
}

export default TodoItem;
