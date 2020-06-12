import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --link-blue: #003abc;
    --link-blue-light: #188fff;
    --text-default: #232a31;
    --text-gray: #464e56;
    --bg-gray-light: #f5f8fa;
    --highlight-yellow: #ffde00;
    --shadow-gray: #c7cdd2;
    --transition-default: 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  }

  html {
    line-height: unset;
  }

  body {
    background: var(--bg-gray-light);
    color: var(--text-default);
    font-family: sans-serif;
  }
`

export default GlobalStyle
