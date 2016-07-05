import angular from 'angular';

import template from './foo.component.html';

const name = 'foo';

class Foo{
    constructor() {}
}

//XXX:  replace:true,
export default angular
  .module(name, [])
  .component(name, {
      bindings:{
          message: '@'
      },
      template,
      controllerAs: 'vm',
      controller: Foo
  });






