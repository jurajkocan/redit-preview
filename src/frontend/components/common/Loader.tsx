import React from "react";
import { style, keyframes } from "typestyle";
import { primaryColor } from "src/styles/CommonStyle";

const spinKeyFrame = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});

const loaderStyle = style({
  border: "12px solid #f3f3f3",
  borderTop: `12px solid ${primaryColor}`,
  borderRadius: "50%",
  width: 90,
  height: 90,
  animationName: spinKeyFrame,
  animationIterationCount: "infinite",
  animationDuration: "2s",
  animationTimingFunction: "linear"
});

export const Loader = (props: { className?: string }) => {
  return <div className={`${loaderStyle} ${props.className && props.className}`}></div>;
};
