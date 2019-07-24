import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1,h2,h3 {
    font-weight: 600;
  }
  
  h4,h5,h6 {
    font-weight: 500;
  }
  
  h1 {
    font-size: 24px;
  }
  
  h2 {
    font-size: 20px;
  }
  
  h3 {
    font-size: 16px;
  }
  
  h4 {
    font-size: 14px;
  }
  
  h5 {
    font-size: 12px;
  }
  
  h6 {
    font-size: 10px;
  }
  
  svg {
    fill: currentColor;
  }
 
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  
  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
`;

export default GlobalStyle;
