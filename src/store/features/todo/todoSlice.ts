import { createAction, createSlice } from '@reduxjs/toolkit';
import { TodoStateModel, todoList } from 'models/todo.model';

const initialState: TodoStateModel = {
  todoList: [],
};

export const addTodoAction = createAction<todoList>('ADD_TODO');

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateCompleted: (state, action) => {
      console.log(state.todoList);
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodoName: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.name;
      }
    },
    deleteTodo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodoAction, (state, action) => {
      state.todoList.push(action.payload);
    });
  },
});
export const { updateCompleted, deleteTodo, updateTodoName } =
  todoSlice.actions;

export default todoSlice.reducer;
