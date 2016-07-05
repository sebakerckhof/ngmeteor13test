import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import meteorAuth from 'angular-meteor-auth';
import uiRouter from 'angular-ui-router';

import { name as Foo } from 'meteor/foo/client/ui/foo/foo.component';
import { name as LoginForm } from '../login/login.component';

import template from './app.component.html';
const name = 'testApp';

class App{
  constructor($scope, $state, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
  }

  logout(ev){
    Meteor.logout((err)=>{
      if(err){
       console.log(err);
      }
    });
  }

}

export default angular
  .module(name, [
    meteorAuth,
    angularMeteor,
    uiRouter,
    LoginForm,
    Foo
  ])
  .component(name, {
    bindings:{},
    template,
    controllerAs: 'vm',
    controller: App
  })
  .config(configureRoutes)
  .run(redirectLogin);


function redirectLogin($rootScope, $state){
  'ngInject';

  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go('login');
    }
  });
}

function configureRoutes($stateProvider, $locationProvider){
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('default', {
      url: '',
      template:`<foo message="world"></foo>`,
      resolve: {
        "currentUser": ["$auth", function($auth){
          return $auth.requireUser();
        }]
      }
    })
    .state('login', {
      url: 'login',
      template: `<login></login>`,
      controllerAs: 'vm',
      controller: 'InstitutesCtrl'
    });
}
