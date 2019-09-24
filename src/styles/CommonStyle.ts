import { cssRule } from "typestyle";

export const primaryColor = "#4583C2";
export const textColorGray = "#8A95A5";

export const mobileBreakePoint = 687;

cssRule("html", {
  backgroundColor: "#f8f9fa"
});

cssRule("a", {
  color: "#4583C2",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "bold",
  textDecoration: "none",
  $nest: {
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
