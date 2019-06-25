import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
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
  
  #progressInput {
    margin: 20px auto;
    width: 30%;
  }
  
  .tooltip {
    font-size: 14px;
  }
  
  .popper .tooltip {
    max-width: unset; 
  }
  
  .import-modal {
    order: 999;
  }
  
`;

export default GlobalStyle;