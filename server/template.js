export const Html = ({ title, style, body }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Search GitHub repos." />
    <link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />
    ${style}
  </head>
  <body>
    <div id="app">${body}</div>
    <script defer src="/vendor.js"></script>
    <script derfe src="/main.js"></script>
  </body>
</html>
`
