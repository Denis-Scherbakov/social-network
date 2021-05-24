import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Первый коммент", "Второй коммент", "Третий коммент"];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action) {
      if (action.payload !== "") state.unshift(action.payload);
    },
  },
});

export default commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;
