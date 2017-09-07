(function () {
    'use strict';

    angular
        .module('app')
        .controller('cancel', cancel);

    cancel.$inject = ['$location'];

    function cancel($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'cancel';

        activate();

        function activate() { }
    }
})();
