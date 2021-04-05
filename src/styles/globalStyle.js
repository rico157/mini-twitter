import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: #0f1419;
    font-family: Helvetica Neue, Arial, sans-serif;
    width: 598px;
    margin: 0 auto;
    @media (max-width: 598px) {
      width: 100%;
    }

    .sign-out {
      position: fixed;
      bottom: 20px;
      right: 20px
    }
  }
`;

export default GlobalStyle;
