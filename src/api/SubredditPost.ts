import { redditClient } from "./ApiClient";
import { ApiRedditPost } from "src/api/apiTypes/ApiRoutes";

export const getBestPosts = (limit: number) => {
  return redditClient.get<ApiRedditPost.BestGet>("/best.json", `?limit=${limit}`);
};
