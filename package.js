Package.describe({
  summary: 'A nifty extension to Winston that provides great logging on the client too'
});

Package.on_use(function (api, where) {
  api.add_files('client.js', 'client');
  api.add_files('server.js', 'client');
});
