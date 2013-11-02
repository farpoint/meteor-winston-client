Package.describe({
  summary: 'A nifty extension to Winston that provides great logging on the client too'
});

Npm.depends({
  "util": "0.4.9"
})

Package.on_use(function (api) {
  api.use('winston', 'server');
  api.use('meteor', 'server');
  api.add_files('client.js', 'client');
    if (api.export) {
        api.export("Winston", 'client');
    }
  api.add_files('server.js', 'server');
});
