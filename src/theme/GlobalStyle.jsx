import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-size: 1.6rem; // 16px, happy rems
    font-family: "Montserrat", sans-serif;
    background-color: darkslategrey;
  }
`