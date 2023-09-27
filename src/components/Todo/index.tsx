import React, { useEffect } from 'react';
import AddTodo from './AddTodo';

import './index.scss';
import { useDispatch, useSelector } from '../../store/store';
import { TodoItemType } from '../../model/Todo';
import TodoItemComponent from './TodoItem';
import { setTodoList } from '../../slices/todoSlice';
import { TODO_LOCAL_STORAGE_KEY } from '../constants/default';
import { Empty } from 'antd';

const Todo = () => {
  const { todoList } = useSelector((state) => state.todoListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const todoListFromLS = localStorage.getItem(TODO_LOCAL_STORAGE_KEY);

    if (todoListFromLS !== null) {
      dispatch(setTodoList(JSON.parse(todoListFromLS)));
    }
  }, [dispatch]);

  return (
    <div className="todo-wrapper">
      <AddTodo />
      {todoList.length ? (
        <div className="todo-list">
          {todoList.map((todoItem: TodoItemType) => (
            <TodoItemComponent key={todoItem.creationDate} todoItem={todoItem} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Todo;
