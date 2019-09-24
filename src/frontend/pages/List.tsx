import React from "react";
import { getBestPosts } from "src/api/SubredditPost";
import { Loader } from "../components/common/Loader";
import { style, media } from "typestyle";
import { RedditListPost } from "src/types/RedditData";
import { RedditCard } from "../components/card/RedditCard";
import { mobileBreakePoint } from "src/styles/CommonStyle";

const listStyle = {
  loader: style({
    margin: "auto"
  }),
  redditCard: style(
    media(
      { maxWidth: mobileBreakePoint },
      {
        marginBottom: 0
      }
    ),
    {
      marginBottom: 25
    }
  )
};

type State = {
  postsLoading: boolean;
  postsData: null | RedditListPost[];
  err: any;
};

export default class List extends React.Component<{}, State> {
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
                    className={listStyle.redditCard}
                    key={`postCard-${index}`}
                    title={post.title}
                    subredditUrl={post.url}
                    points={post.ups}
                    subreditName={post.subreddit_name_prefixed}
                  />
                );
              })}
          </div>
        )}
      </div>
    );
  }
}
