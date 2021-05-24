import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentsReducer from "./slices";

const rootReducer = combineReducers({ commentsReducer });

export const store = configureStore({
  reducer: rootReducer,
});
