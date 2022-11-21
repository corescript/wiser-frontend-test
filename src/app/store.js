import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "features/news/slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
