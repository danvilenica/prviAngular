(function () {
    'use strict';

    angular
        .module('app')
        .controller('main', mainCtrl);

    mainCtrl.$inject = ['people'];

    function mainCtrl(people) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'main';
        
        vm.people = people;
    }
})();
