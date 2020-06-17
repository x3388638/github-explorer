import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --link-blue: #003abc;
    --link-blue-light: #188fff;
    --text-default: #232a31;
    --text-gray: #464e56;
    --bg-gray-light: #f5f8fa;
    --bg-white: #fff;
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

  @media (prefers-color-scheme: dark) {
    :root {
      --link-blue: #12a9ff;
      --link-blue-light: #188fff;
      --text-default: #f0f3f5;
      --text-gray: #6e7780;
      --bg-gray-light: #101518;
      --bg-white: #1d2228;
      --highlight-yellow: #806f00;
      --shadow-gray: #000000;
    }
  }
`

export default GlobalStyle
