import httpClient from "utils/http";

export function fetchNews(config) {
  return httpClient({
    url: "/v2/everything",
    method: "GET",
    ...config,
  });
}
