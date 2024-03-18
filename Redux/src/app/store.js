import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoReducer';
export const store = configureStore({
    reducer: todoReducer
})