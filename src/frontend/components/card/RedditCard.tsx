import React from "react";
import { style } from "typestyle";

const redditCardStyle = {
  wrapper: style({
    border: "1px solid #E2E7EB"
  })
};

type Props = {
  title: string;
  subredditUrl: string;
  subscribersCount: number;
};

export const RedditCard = (props: Props) => {
  return (
    <div className={redditCardStyle.wrapper}>
      <div>{props.title}</div>
      <div>link and supbsribers</div>
    </div>
  );
};
