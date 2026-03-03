import { createSlice } from "@reduxjs/toolkit";
import { initialBooks } from "../data/dummyBooks";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksList: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.booksList.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
