import React from "react";
import { getBestPosts } from "src/api/SubredditPost";
import { Loader } from "../components/common/Loader";
import { style } from "typestyle";
import { RedditListPost } from "src/types/RedditData";
import { RedditCard } from "../components/card/RedditCard";

const listStyle = {
  loader: style({
    margin: "auto"
  })
};

type State = {
  postsLoading: boolean;
  postsData: null | RedditListPost[];
  err: any;
};

export class List extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      postsLoading: true,
      postsData: null,
      err: null
    };
    getBestPosts(10)
      .then(response =>
        this.setState({
          postsData: response.data.data.children.map(post => post.data),
          postsLoading: false
        })
      )
      .catch(err =>
        this.setState({
          err,
          postsLoading: false
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.postsLoading ? (
          <Loader className={listStyle.loader} />
        ) : (
          <div>
            {this.state.postsData &&
              this.state.postsData.map((post, index) => {
                return (
                  <RedditCard
                    key={`postCard-${index}`}
                    title={post.title}
                    subredditUrl={post.url}
                    subscribersCount={post.subreddit_subscribers}
                  />
                );
              })}
          </div>
        )}
      </div>
    );
  }
}
