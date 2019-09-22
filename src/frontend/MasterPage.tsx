import React from "react";
import { style, media, cssRaw } from "typestyle";
import { Link } from "react-router-dom";

cssRaw(`
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}
`);

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
