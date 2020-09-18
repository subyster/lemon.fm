import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    ${props => {
      const theme = props.theme;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
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

    transition: color .2s ease-out;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
