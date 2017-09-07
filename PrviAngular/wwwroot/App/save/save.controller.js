(function () {
    'use strict';

    angular
        .module('app')
        .controller('save', save);

    save.$inject = ['$location'];

    function save($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'save';

        activate();

        function activate() { }
    }
})();
