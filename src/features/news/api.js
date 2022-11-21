import httpClient from "utils/http";

export function fetchAllNews(config) {
  return httpClient({
    url: "/v2/everything",
    method: "GET",
    ...config,
  });
}

export function fetchTopNews(config) {
  return httpClient({
    url: "/v2/top-headlines",
    method: "GET",
    ...config,
  });
}
