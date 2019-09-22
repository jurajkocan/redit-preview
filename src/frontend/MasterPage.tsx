import React from "react";
import { style, media } from "typestyle";
import { Link } from "react-router-dom";

const masterPageStyle = {
  contentWrapper: style(media({ maxWidth: 500 }, { color: "red" }), {
    width: 688,
    margin: "auto",
    marginTop: 50,
    marginBottom: 50
  })
};

export const MasterPage: React.FC = props => {
  return (
    <div className={masterPageStyle.contentWrapper}>
      <Link to="/Detail/12"> To detaiul</Link>
      {props.children}
    </div>
  );
};
