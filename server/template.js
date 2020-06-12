export const Html = ({ title, style, body }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />
    ${style}
  </head>
  <body>
    <div id="app">${body}</div>
    <script src="/bundle.js"></script>
  </body>
</html>
`
