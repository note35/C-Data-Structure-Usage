import ejs from 'ejs';

const template = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

  <link rel="icon" href="favicon.png">
  <title>example</title>
</head>

<body>
  <!-- The app hooks into this div -->
  <div id="app"><div><%- html %></div></div>

  <script type="text/javascript" charset="utf-8">
    window.__PRELOADED_STATE__ = '<%= preloadState %>';
  </script>

  <!-- The JavaScript bundle -->
  <script src="/scripts/client.js"></script>
</body>
</html>
`;

const render = function(params) {
  return ejs.render(template, params);
}

export default render;
