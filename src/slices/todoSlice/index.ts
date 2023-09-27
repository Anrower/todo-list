import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoItemType, TodoStateType } from '../../model/Todo';

const initialState: TodoStateType = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: TodoStateType, action: PayloadAction<TodoItemType>) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state: TodoStateType, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload,
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
