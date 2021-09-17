import { createGlobalStyle } from "styled-components";

import cssVariables from "./variables2.json";
import "./fonts.css";
const variable = cssVariables.variable;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${variable.bgColor};
    font-family: sans-serif;
    font-size: ${variable.textSize};
    color: ${variable.textColor};
    width: 100%;
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        font-family: "Besley", serif;
        box-sizing: border-box;
    }
  }
  h1 {
    font-family: 'Allison', cursive;
  }
  p,span {
    font-family: 'Shippori Mincho', serif;
  }
`;
