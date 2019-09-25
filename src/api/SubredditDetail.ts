import { redditClient } from "./ApiClient";
import { ApiRedditDetail } from "src/api/apiTypes/ApiRoutes";

export const getDetail = (redditDetailName: string) => {
  return redditClient.get<ApiRedditDetail.DetailGet>("", `${redditDetailName}/about.json`);
};
