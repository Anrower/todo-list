import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import { useDispatch, useSelector } from '../../store/store';
import { TodoItemType } from '../../models/Todo';
import TodoItemComponent from './TodoItem';
import { setTodoList } from '../../slices/todoSlice';
import { TODO_LOCAL_STORAGE_KEY } from '../../constants/default';
import { Empty, Switch } from 'antd';
import './index.scss';

const Todo = () => {
  const { todoList } = useSelector((state) => state.todoListReducer);
  const dispatch = useDispatch();
  const [isShowActive, setIsShowActive] = useState(true);

  const doneTaskList = todoList.filter((task) => task.isDone);
  const activeTaskList = todoList.filter((task) => !task.isDone);

  const onChange = (checked: boolean) => {
    setIsShowActive(!checked);
  };

  useEffect(() => {
    const todoListFromLS = localStorage.getItem(TODO_LOCAL_STORAGE_KEY);

    if (todoListFromLS !== null) {
      dispatch(setTodoList(JSON.parse(todoListFromLS)));
    }
  }, [dispatch]);

  const renderContent = () => {
    if (isShowActive && activeTaskList.length) {
      return (
        activeTaskList.map((todoItem: TodoItemType) => (
          <TodoItemComponent key={todoItem.creationDate} todoItem={todoItem} />
        ))
      );
    } if (!isShowActive && doneTaskList.length) {
      return (
        doneTaskList.map((todoItem: TodoItemType) => (
          <TodoItemComponent key={todoItem.creationDate} todoItem={todoItem} />
        ))
      );
    }

    return <Empty />;
  };

  return (
    <div className="todo-wrapper">
      <AddTodo />
      <div className="todo-switcher">
        <p>Active</p>
        <Switch defaultChecked onChange={onChange} />
        <p>Done</p>
      </div>

      <div>
        <h2>Todo List</h2>
        <div className="todo-list">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Todo;
