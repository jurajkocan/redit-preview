import { cssRule, media } from "typestyle";

export const primaryColor = "#4583C2";
export const textColorGray = "#8A95A5";
export const textColorBlue700 = "#263D52";
export const textColorBlue600 = "#25496E";
export const textColorPrimary = textColorBlue600;

export const mobileBreakePoint = 687;

cssRule(
  "html",
  {
    backgroundColor: "#f8f9fa",
    color: textColorPrimary,
    fontSize: 20,
    lineHeight: "29px"
  },
  media(
    { maxWidth: mobileBreakePoint },
    {
      fontSize: 18,
      lineHeight: "26px"
    }
  )
);

cssRule("h1, h2, h3, h4, h5, h6", {
  color: textColorBlue700,
  margin: 0
});

cssRule(
  "h1",
  {
    fontSize: 48,
    fontWeight: 900,
    lineHeight: "52px"
  },
  media(
    { maxWidth: mobileBreakePoint },
    {
      fontSize: 42,
      lineHeight: "46px"
    }
  )
);

cssRule(
  "h2",
  {
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: "35px"
  },
  media(
    { maxWidth: mobileBreakePoint },
    {
      fontSize: 22,
      lineHeight: "29px"
    }
  )
);

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
