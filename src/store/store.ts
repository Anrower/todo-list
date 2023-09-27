import {
  TypedUseSelectorHook,
  useSelector as useDefaultSelector,
  useDispatch as useDefaultDispatch,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../slices/todoSlice';

export const store = configureStore({
  reducer: {
    todoListReducer: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;

export const useDispatch = () => useDefaultDispatch<AppDispatch>();
