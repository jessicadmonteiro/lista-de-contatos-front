import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  }

  :root{
    --brand1: #15adba;
    --brand2: #44c9d2;
    --gray1: #868e96;
    --gray2: #757575;
    --blue1: #f8f9fa;
    --blue2: #e9f4ff;
    --white: #ffffff;
    
  }

  body {
    background-color: var(--blue1);
  }

  button {
    cursor: pointer;
  }

  li{
    list-style: none;
  }
`
export default GlobalStyle