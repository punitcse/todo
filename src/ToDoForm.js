import React, { Component } from 'react';
const ToDoForm = (props) => {
  return(
    <section>
      <form onSubmit={props.addItem}>
        <input type='text'
          value={props.currentTask}
          onChange={props.updateItemName}
          />
        <input type="submit" />
      </form>
    </section>
  )
};

export default ToDoForm;
