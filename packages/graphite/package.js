// https://github.com/lonnen/graphite.js
Package.describe({
    summary: 'Graphite url builder'
});

Package.on_use(function (api, where) {
    api.add_files('graphite.js', 'client');
});
