import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://newsapi.org",
});

httpClient.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: process.env.REACT_APP_NEWS_API_KEY,
  };
  return config;
});

export default httpClient;
