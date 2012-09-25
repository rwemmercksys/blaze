Package.describe({
  summary: "Toolkit for live-updating HTML interfaces",
  internal: true
});

Package.on_use(function (api) {
  api.use(['underscore', 'uuid', 'domutils', 'liverange', 'universal-events'],
          'client');

  api.add_files(['spark.js', 'patch.js', 'convenience.js'], 'client');
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use(['spark', 'test-helpers'], 'client');
  // we include preserve inputs just for idNameLabeler;
  // we deactivate the default preservation in spark_tests.js
  api.use('preserve-inputs', 'client');

  api.add_files('test_form_responder.js', 'server');

  api.add_files([
    'spark_tests.js',
    'patch_tests.js'
  ], 'client');
});
