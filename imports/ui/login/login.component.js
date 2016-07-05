import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './login.component.html';

const name = 'login';

class Login{
  constructor($state) {
    'ngInject';
    //Properties
    this.$state = $state;

    this.user = {email: 'john@doe.com', password: 'johndoe'};
  }

  login(){
    Meteor.loginWithPassword(this.user.email,this.user.password, err => {
      if(err){
        alert(`Error: ${err}`);
      }else{
        this.$state.go('default');
      }
    });
  }
}

export default angular
  .module(name, [
    angularMeteor,
  ])
  .component(name, {
    bindings:{},
    template,
    controllerAs: 'vm',
    controller: Login
  });