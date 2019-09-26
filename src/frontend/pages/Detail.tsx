import React from "react";
import { RouteComponentProps } from "react-router";
import { SubRedditDetail } from "src/types/RedditData";
import { getDetail } from "src/api/SubredditDetail";
import { parseQueryString } from "src/utils/RouteUtils";
import { Loader } from "../components/common/Loader";
import { style } from "typestyle";
import { Link } from "react-router-dom";
// @ts-ignore
import NumberFormat from "react-number-format";

const detailStyle = {
  loader: style({
    margin: "auto"
  }),

  keyValueWrapper: style({
    marginBottom: 45,
    $nest: {
      "&:last-child": {
        marginBottom: 0
      }
    }
  }),
  key: style({
    marginBottom: 10
  })
};

type Props = RouteComponentProps<{ subreddit?: string }>;
type State = {
  detailLoading: boolean;
  subredditDetailData: SubRedditDetail | null;
  err: any;
};
class Detail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const parsedQuerryString = parseQueryString(this.props.location.search);
    const subredditName =
      typeof parsedQuerryString["subreddit"] === "string"
        ? parsedQuerryString["subreddit"]
        : parsedQuerryString["subreddit"][0];

    this.state = {
      detailLoading: subredditName ? true : false,
      subredditDetailData: null,
      err: subredditName ? null : "no subreddit param"
    };

    if (subredditName) {
      getDetail(subredditName)
        .then(response => {
          this.setState({
            detailLoading: false,
            subredditDetailData: response.data.data
          });
        })
        .catch(err => {
          this.setState({
            detailLoading: false,
            err
          });
        });
    }
  }

  render() {
    if (this.state.detailLoading) {
      return <Loader className={detailStyle.loader} />;
    }
    return (
      <div>
        <Link to="/">Home</Link>
        {!this.state.subredditDetailData ? (
          <div>Some Error</div>
        ) : (
          <div>
            <div className={detailStyle.keyValueWrapper}>
              <h2 className={detailStyle.key}>Title</h2>
              <div>{this.state.subredditDetailData.title}</div>
            </div>
            <div className={detailStyle.keyValueWrapper}>
              <h2 className={detailStyle.key}>Public description</h2>
              <div>{this.state.subredditDetailData.public_description}</div>
            </div>
            <div className={detailStyle.keyValueWrapper}>
              <h2 className={detailStyle.key}>Subscriber count</h2>
              <div>
                <NumberFormat
                  value={this.state.subredditDetailData.subscribers}
                  displayType={"text"}
                  decimalSeparator={false}
                  thousandSeparator="."
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Detail;
