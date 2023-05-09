import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (todo, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      todo.push(newTodo);
    },

    deleteTodo: (todo, action) => {
      return todo.filter((item) => item.id !== action.payload);
    },
    completeTodo: (todo, action) => {
      const index = todo.findIndex((item) => item.id === action.payload);
      todo[index].completed = true;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = slice.actions;
export default slice.reducer;
