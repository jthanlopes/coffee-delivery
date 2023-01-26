import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
  }

  h1, h2 {
    font-weight: 800;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  ul {
    list-style: none;
  }

  @media(max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;