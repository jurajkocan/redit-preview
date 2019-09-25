export type RedditListPost = {
  title: string;
  ups: number;
  url: string;
  subreddit_name_prefixed: string;
};

export type SubRedditDetail = {
  title: string;
  public_description: string;
  display_name_prefixed: string;
  subscribers: number;
};
