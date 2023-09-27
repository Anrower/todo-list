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
    updateTodo: (state: TodoStateType, action: PayloadAction<TodoItemType>) => {
      const result = state.todoList.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return action.payload;
        }

        return todoItem;
      });

      state.todoList = result;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice;
