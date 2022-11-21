import { createAsyncThunk } from "@reduxjs/toolkit";
import * as newsAPI from "./api";

export const fetchAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (config) => {
    const response = await newsAPI.fetchAllNews(config);
    return response.data;
  }
);

export const fetchTopNews = createAsyncThunk(
  "news/fetchTopNews",
  async (config) => {
    const response = await newsAPI.fetchTopNews(config);
    return response.data;
  }
);
