import React from "react";
import { style, media } from "typestyle";
import { Link } from "react-router-dom";
import { RoutesEnum } from "src/constants/Roots";
// @ts-ignore
import NumberFormat from "react-number-format";
import { textColorGray, mobileBreakePoint } from "src/styles/CommonStyle";

const redditCardStyle = {
  wrapper: style(
    media(
      { maxWidth: mobileBreakePoint },
      {
        borderRadius: 0,
        padding: "20px 15px"
      }
    ),
    {
      border: "1px solid #E2E7EB",
      padding: "25px 20px",
      borderRadius: 4,
      backgroundColor: "white"
    }
  ),
  title: style(
    media(
      { maxWidth: mobileBreakePoint },
      {
        fontSize: 20
      }
    ),
    {
      cursor: "pointer",
      fontSize: 24,
      color: "#263D52",
      fontWeight: "bold",
      lineHeight: 1.3,
      "-webkit-line-clamp": 2,
      WebkitBoxOrient: "vertical",
      whiteSpace: "normal",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",

      marginBottom: 12,
      $nest: {
        "&:hover": {
          textDecoration: "underline"
        }
      }
    }
  ),
  cardContentRow: style({
    display: "flex"
  }),
  subreditLink: style(
    media(
      { maxWidth: mobileBreakePoint },
      {
        fontSize: 16
      }
    ),
    {
      fontSize: 18,
      maxWidth: "40%",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  ),
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
