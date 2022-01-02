import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --very-vark-blue: hsl(220, 13%, 13%);
    --dark-grayish-blue: hsl(219, 9%, 45%);
    --grayish-blue: hsl(220, 14%, 75%);
    --light-grayish-blue: hsl(223, 64%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);

    --orange: hsl(26, 100%, 55%);
    --pale-orange: hsl(25, 100%, 94%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: subpixel
  }

  body, input, textarea, button {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`