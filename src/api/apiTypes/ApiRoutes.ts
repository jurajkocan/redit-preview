import { RedditListPost } from "src/types/RedditData";

export namespace ApiRedditPost {
  export type BestGet = {
    url: "/best.json";
    responseData: {
      data: {
        children: {
          data: RedditListPost;
        }[];
      };
    };
  };
}
export type AppGetType = ApiRedditPost.BestGet;
