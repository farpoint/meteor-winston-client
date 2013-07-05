Package.describe({
  summary: 'A nifty extension to Winston that provides great logging on the client too'
});

Npm.depends({
  "util": "0.4.9"
})

Package.on_use(function (api, where) {
  api.use('winston', 'server');
  api.add_files('client.js', 'client');
  api.add_files('server.js', 'server');
});
