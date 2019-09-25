import { RedditListPost, SubRedditDetail } from "src/types/RedditData";

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

export namespace ApiRedditDetail {
  export type DetailGet = {
    url: "";
    responseData: {
      data: SubRedditDetail;
    };
  };
}

export type AppGetType = ApiRedditPost.BestGet | ApiRedditDetail.DetailGet;
