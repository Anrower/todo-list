import React from 'react';
import AddTodo from './AddTodo';

import './index.scss';

const Todo = () => (
  <div className="todo-wrapper">
    <AddTodo />
    <div>Todo List</div>
  </div>
);

export default Todo;
