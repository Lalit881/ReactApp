import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../funtionality/TodoList/TodoList';

export const store = configureStore({
    reducer: todoReducer
});