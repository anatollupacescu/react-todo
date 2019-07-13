import React from 'react';
import TodoItem from './TodoItem';

class TodoForm extends React.Component {
  state = { inputValue: '' };
  
  handleChange = this.handleChange.bind(this);
  handleChange(e) {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    });
  }

  submitForm = this.submitForm.bind(this);
  submitForm(e) {
    e.preventDefault();
    if(e.keyCode === 13) { /* Enter key pressed */
      let text = this.state.inputValue
      let added = this.props.todoObject.addItem(text);
      if (!added) {
        alert('we got a duplicate!')
        return
      }
      this.setState({
        inputValue: ''
      });
    }
  }

  triggerRender = this.triggerRender.bind(this);
  triggerRender() {
    this.setState(this.state);
  }
  
  render() {
    const { todoObject } = this.props;
    return (<div>
      <h3>New item</h3>
      <div>
        <input type="text" onKeyUp={this.submitForm} onChange={this.handleChange} value={this.state.inputValue} />
      </div>
      <div>
        <h2>Todos:</h2>
        <ol>
          {todoObject.items.map((item, i) => (
            <div key={i}>
              <TodoItem
                item={item}
                todoObject={todoObject}
                triggerRender={this.triggerRender} />
            </div>
          ))}
        </ol>
      </div>
    </div>);
  }
}

export default TodoForm;
