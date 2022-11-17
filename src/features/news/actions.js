import { createAsyncThunk } from "@reduxjs/toolkit";
import * as newsAPI from "./api";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (config) => {
    const response = await newsAPI.fetchNews(config);
    return response.data;
  }
);
