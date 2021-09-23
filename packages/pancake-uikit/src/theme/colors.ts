import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3c423c",
  primaryBright: "#3c423c",
  primaryDark: "#F9F9F9",
  secondary: "#266247",
  success: "#5eda6a",
  warning: "#FFB237",
};

export const additionalColors = {
 binance: "#F0B90B",
  overlay: "#3c423c",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#f9f9fa",
  backgroundDisabled: "#eae9eb",
  backgroundAlt: "#babbba",
  cardBorder: "#ebe9e9",
  contrast: "#274b38",
  dropdown: "#f4f9f4",
  dropdownDeep: "#e2ede3",
  invertedContrast: "#FFFFFF",
  input: "#e2ede3",
  inputSecondary: "#e2ede3",
  tertiary: "#eff5f1",
  text: "#242524",
  textDisabled: "#838584",
  textSubtle: "#266247",
  disabled: "#ebe9e9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0b826f 0%, #7dff6b 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #0b826f 0%, #7dff6b 100%)",
    cardHeader: "linear-gradient(111.68deg, #0b826f 0%, #7dff6b 100%)",
    blue: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
    violet: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
    violetAlt: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
    gold: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#249c66",
  background: "#3c423c",
  backgroundDisabled: "#545454",
  backgroundAlt: "#242524",
  cardBorder: "#3c423c",
  contrast: "#FFFFFF",
  dropdown: "#274b38",
  dropdownDeep: "#266247",
  invertedContrast: "#274b38",
  input: "#266247",
  inputSecondary: "#274b38",
  primaryDark: "#F9F9F9",
  tertiary: "#3c423c",
  text: "#5eda6a",
  textDisabled: "#545454",
  textSubtle: "#babbba",
  disabled: "#545454",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0b826f 0%, #7dff6b 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #0b826f 0%, #7dff6b 100%)",
    cardHeader: "linear-gradient(166.77deg, #266247 0%, #6a820b 100%)",
    blue: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
    violet: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
    violetAlt: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
    gold: "linear-gradient(180deg, #0b826f 0%, #7dff6b 100%)",
  },
};
