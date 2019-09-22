import ReactDOM from "react-dom";
import { RouterApp } from "./Router";
import { cssRule } from "typestyle";

cssRule("html, body", {
  margin: 0,
  padding: 0
});

ReactDOM.render(RouterApp, document.getElementById("root"));
