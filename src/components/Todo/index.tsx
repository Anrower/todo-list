import React from 'react';
import AddTodo from './AddTodo';

import './index.scss';
import { useSelector } from '../../store/store';
import { TodoItemType } from '../../model/Todo';
import TodoItemComponent from './TodoItem';

const Todo = () => {
  const { todoList } = useSelector((state) => state.todoListReducer);

  return (
    <div className="todo-wrapper">
      <AddTodo />
      <div className="todo-list">
        {todoList.map((todoItem: TodoItemType) => (
          <TodoItemComponent key={todoItem.creationDate} todoItem={todoItem} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
