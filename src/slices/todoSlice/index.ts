import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoItemType, TodoStateType } from '../../models/Todo';
import { TODO_LOCAL_STORAGE_KEY } from '../../constants/default';

const initialState: TodoStateType = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList: (
      state: TodoStateType,
      action: PayloadAction<TodoItemType[]>,
    ) => {
      state.todoList = action.payload;
    },
    addTodo: (state: TodoStateType, action: PayloadAction<TodoItemType>) => {
      const result = [...state.todoList, action.payload];

      state.todoList = result;
      localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(result));
    },
    removeTodo: (state: TodoStateType, action: PayloadAction<string>) => {
      const result = state.todoList.filter(
        (todoItem) => todoItem.id !== action.payload,
      );

      state.todoList = result;
      localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(result));
    },
    updateTodo: (state: TodoStateType, action: PayloadAction<TodoItemType>) => {
      const result = state.todoList.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return action.payload;
        }

        return todoItem;
      });

      state.todoList = result;
      localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(result));
    },
  },
});

export const {
  addTodo, removeTodo, updateTodo, setTodoList,
} = todoSlice.actions;

export default todoSlice;
