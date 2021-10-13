import { createGlobalStyle } from "styled-components";

import variable from "./variables.json";
import "./fonts.css";
// const variable = cssVariables.variable;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${variable.bgColor};
    font-family: sans-serif;
    font-size: ${variable.textSize};
    color: ${variable.textColor};
    width: 100%;
    scrollbar-width: 0px;
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        font-family: serif;
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
