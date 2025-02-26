import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #000, #444); 
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding:0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;