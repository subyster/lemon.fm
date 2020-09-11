import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background: #F3FFD7;
    --primary: #4CD105;
    --primary-dark: #1E5003;
    --primary-light: #DAFE86;
    --secondary: #F9FFEB;
    --text: #081401;

    --logo: #4CD105;
    --input: #DAFE86;

  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  *, input, button {
    border: 0;
    font-size: 16px;
    color: var(--text);
    font-weight: 400;
    font-family: Roboto, sans-serif;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
