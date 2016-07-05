Package.describe({
  summary: "Foo",
  version:"1.0.0",
  name: "foo",
  documentation:null
});

Package.onUse(function(api) {
  api.versionsFrom("1.3.4.1");

  api.imply([]);

  api.use([
    'meteor',
    'urigo:static-templates@0.0.5',
    'pbastowski:angular-babel@1.3.6',
    'tmeasday:check-npm-versions@0.3.1'
  ]);


  api.mainModule('client/main.js', 'client');

  // PACKAGES FOR SERVER
  api.use([], {weak:true});
  // UNORDERED DEPENDENCIES (to solve
  api.use([], {unordered:true});

  //EXPORT VARIABLES
  api.export([]);

});

Package.onTest(function (api) {});
