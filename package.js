Package.describe({
  summary: 'A nifty extension to Winston that provides great logging on the client too',
  version: "0.2.0",
  git: "https://github.com/farpoint/meteor-winston-client.git"
});

Npm.depends({
  "util": "0.10.3"
})

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use("infinitedg:winston@0.7.3", 'server');
  api.use('meteor', 'server');
  api.use('check', 'server');
  api.add_files('client.js', 'client');
    if (api.export) {
        api.export("Winston", 'client');
    }
  api.add_files('server.js', 'server');
});
