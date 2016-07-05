import angular from 'angular';
import { Meteor } from 'meteor/meteor';

import { name as App } from '../imports/ui/app/app.component';

function onReady() {
  angular.bootstrap(document.body, [
    App
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}