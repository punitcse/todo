import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import ToDoItem from './TodoItem';
import ToDoForm from './ToDoForm';

class ToDoList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { name: 'mango',     completed: false },
        { name: 'banana',    completed: false },
        { name: 'pineapple', completed: false }
      ],
      currentTask: '',
      editTask: false
    }
    this.changeStatus   = this.changeStatus.bind(this)
    this.deleteTask     = this.deleteTask.bind(this)
    this.addTask        = this.addTask.bind(this)
    this.updateTaskName = this.updateTaskName.bind(this)
  }
  changeStatus(index) {
    let tasks = this.state.tasks
    let task = tasks[index]
    task.completed = !task.completed

    this.setState({ tasks })
  }
  updateTaskName(event) {
    var currentTask = event.target.value
    this.setState({currentTask})
  }

  addTask(event) {
    event.preventDefault();
    let tasks = this.state.tasks;
    tasks.push({name: this.state.currentTask, completed: false});
    this.setState({tasks});
    this.state.currentTask = '';
  }
  // editTask(index) {
  //   event.preventDefault();
  //   let tasks = this.state.tasks;
  //   tasks[eve]
  // }
  deleteTask(index) {
    let tasks = this.state.tasks
    tasks.splice(index, 1)
    this.setState({ tasks })
  }

  render() {
    return(
      <section>
        <ToDoForm
          addItem={this.addTask}
          currentTask={this.state.currentTask}
          updateItemName={this.updateTaskName}
        />
        <ul>
          {
            this.state.tasks.map((todo, index) => {
              return(
                <ToDoItem
                    key={index}
                    index={index} details={todo}
                    clickHandler={this.changeStatus}
                    currentItem={this.currentTask}
                    deleteItem={this.deleteTask}
                    addItem={this.addTask}
                    editItem={this.editTask}
                    updateItemName={this.updateTaskName}
                />
              )
            })
          }
        </ul>
      </section>
    )
  }
}

ReactDom.render(<ToDoList />, document.getElementById('root'))
