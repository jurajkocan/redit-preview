import React from "react";
import { style } from "typestyle";
import { Link } from "react-router-dom";
import { RoutesEnum } from "src/constants/Roots";
// @ts-ignore
import NumberFormat from "react-number-format";
import { textColorGray } from "src/styles/CommonStyle";

const redditCardStyle = {
  wrapper: style({
    border: "1px solid #E2E7EB",
    padding: "25px 20px",
    borderRadius: 4
  }),
  title: style({
    cursor: "pointer",
    fontSize: 24,
    color: "#263D52",
    fontWeight: "bold",
    lineHeight: 1.3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: 12,
    $nest: {
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }),
  cardContentRow: style({
    display: "flex"
  }),
  subreditLink: style({
    fontSize: 18
  }),
  dot: style({
    height: 5,
    width: 5,
    backgroundColor: textColorGray,
    borderRadius: "50%",
    display: "inline-block",
    margin: "auto 5px auto 5px"
  }),
  points: style({
    color: textColorGray,
    fontSize: 18,
    $nest: {
      span: {
        fontWeight: "bold"
      }
    }
  })
};

type Props = {
  title: string;
  subredditUrl: string;
  points: number;
  subreditName: string;
  className?: string;
};

export const RedditCard = (props: Props) => {
  return (
    <div className={`${redditCardStyle.wrapper} ${props.className && props.className}`}>
      <div
        className={redditCardStyle.title}
        onClick={() => {
          const redirectWindow = window.open(props.subredditUrl, "_blank");
          if (redirectWindow) {
            redirectWindow.location;
          }
        }}
      >
        {props.title}
      </div>
      <div className={redditCardStyle.cardContentRow}>
        <Link
          className={redditCardStyle.subreditLink}
          to={`${RoutesEnum.Detail}/${props.subreditName}`}
        >
          {props.subreditName}
        </Link>
        <span className={redditCardStyle.dot}></span>
        <div className={redditCardStyle.points}>
          <NumberFormat
            value={props.points}
            displayType={"text"}
            decimalSeparator={false}
            thousandSeparator="."
          />{" "}
          points
        </div>
      </div>
    </div>
  );
};
