
class TodoItem extends React.Component {
  
  boxTicked = this.boxTicked.bind(this)
  
  boxTicked() {
    let {todoObject, item, triggerRender} = this.props
    todoObject.toggleItemDoneStatus(item)
    triggerRender()
  }
  
  render() {

    let {item, key, todoObject} = this.props

    let className = item.done ? "done" : ""
    
    return (
      <li key={key}>
        <label>
          <input type="checkbox" defaultChecked={item.done} onChange={this.boxTicked} /> 
          <span className={className}>{item.text}</span>
        </label>
      </li>
    )
  }
}

class TodoForm extends React.Component {

  state = { inputValue: ""}
  
  handleChange = this.handleChange.bind(this)
  handleChange(e) {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    })
  }
  
  submitForm = this.submitForm.bind(this)
  submitForm(e) {
    e.preventDefault();
    if (e.keyCode === 13) { /* Enter key pressed */
      this.props.todoObject.addItem(this.state.inputValue)
       this.setState({
        inputValue: ''
      })
    }
  }
  
  triggerRender = this.triggerRender.bind(this)
  triggerRender() {
    this.setState(this.state)
  }
  
  render() {
  
    const { todoObject } = this.props
  
    return (
      <div>
        <h3>New item</h3>
        <div>
          <input type="text" onKeyUp={this.submitForm} onChange={this.handleChange} value={this.state.inputValue} />
        </div>
        <div>
          <h2>Todos:</h2>
          <ol>
          {todoObject.items.map((item, id) => (
            <TodoItem key={id} item={item} todoObject={todoObject} triggerRender={this.triggerRender}/>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}
