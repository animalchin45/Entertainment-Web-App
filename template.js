export default () => {
  return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="shortcut icon" type="image/png" sizes="32x32" href='./client/assets/favicon-32x32.png'>

        <title>Frontend Mentor | Entertainment web app</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="/dist/bundle.js"></script>
    </body>
    </html>`
}
