// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Outfit', sans-serif;
  }

  body {
    min-height: 100vh;
    background-color: ${(props) =>
      props.theme?.background || "#000"}; /* fallback added */
    color: ${(props) => props.theme?.color || "#fff"}; /* fallback added */
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
