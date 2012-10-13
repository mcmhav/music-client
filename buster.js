var config = module.exports;

config["browser test"] = {
  environment: "browser",
  libs: [
    'lib/require.js',
    'lib/conf_require.js'
  ],
  resources: [
    'src/**.js',
    'src/**.html',
    'lib/jquery.js',
    'lib/jquery-mobile.js',
    'lib/text.js',
    'lib/underscore.js',
    'lib/backbone.js',
    'test/mocks/*.js'
  ],
  tests: [
    'test/conference_model_test.js',
    'test/backend_service_test.js',
    'test/conference_view_test.js',
    'test/client_view_test.js'
    // 'test/*.js'
  ],
  extensions: [
    require("buster-amd")
  ]
};

