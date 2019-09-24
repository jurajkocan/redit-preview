import React from "react";
import { style, media, cssRaw } from "typestyle";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { mobileBreakePoint } from "src/styles/CommonStyle";

cssRaw(`
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}
`);

const masterPageStyle = {
  contentWrapper: style(media({ maxWidth: mobileBreakePoint }, { width: "100%" }), {
    width: 688,
    margin: "auto",
    marginTop: 50,
    marginBottom: 50
  })
};

const MasterPageComponent: React.FC<RouteComponentProps<any>> = props => {
  const subReditTitle = props.match.params.subredit;
  console.log(props.match.params);

  return (
    <div className={masterPageStyle.contentWrapper}>
      <h1>{subReditTitle}</h1>
      <Link to="/Detail/12"> To detaiul</Link>
      {props.children}
    </div>
  );
};

export const MasterPage = withRouter(MasterPageComponent);
