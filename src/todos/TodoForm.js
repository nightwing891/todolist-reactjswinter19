import React, { Component } from 'react';

class TodoForm extends Component {
  state = { todoValue: '', complete: false }

  // change the state to what the user inputs in 
  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value  })
    const { name, value } = e.target
                      // todoValue: 'user input'
    this.setState({ [name]: value  })
  }

  handleSubmit = (e) => {
    e.preventDefault() // stop reloading, that loses user data
    // create crud action
    this.props.addTodo(this.state)
    // rest form 
    this.setState({ todoValue: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.todoValue}
          name='todoValue'
          onChange={this.handleChange}

          required
          placeholder='Add a todo'
        />
      </form>
    )
  }
}

export default TodoForm;