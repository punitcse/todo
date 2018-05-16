import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      isEdited: false,
      toggleEdited: () => {
        let isEdited = !this.state.isEdited;
        this.setState({isEdited})
      }
    }
  }

  render() {
    let details = this.props.details;
    return(
      <li
        className={details.completed ? 'completed' : ''}
        onClick={() => {
          this.props.clickHandler(this.props.index)
        }}
        key={this.props.index}
      >
        {this.state.isEdited ?
          <input value={this.props.currentItem} /> : details.name}
        <button
          onClick={(e) => {
            e.preventDefault()
            this.state.toggleEdited(this.props.index);
          }}>
          Edit task
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.deleteItem(this.props.index);
            }
          }>
          Delete
        </button>
      </li>
    )
  }
}

export default ToDoItem;
