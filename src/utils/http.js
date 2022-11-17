import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://newsapi.org",
});

export default httpClient;
