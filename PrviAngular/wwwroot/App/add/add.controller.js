(function () {
    'use strict';

    angular
        .module('app')
        .controller('add', add);

    add.$inject = ['data', '$state', '$stateParams','person'];

    function add(data, $state, $stateParams, person) {
        /* jshint validthis:true */
        var vm = this;
        vm.isEdit = $state.current.data.isEdit;
        vm.title = 'add';
        vm.add = add;
        vm.edit = edit;        
        vm.item = person;

        //if (vm.isEdit) {
        //    var id = $stateParams.id;
        //    vm.item = angular.copy(data.getpersonById(id));
        //}

        function add() {            
            data.addPerson(vm.item)
                .then(function () {
                    $state.reload();
                });            
        }

        function edit() {
            data.editPerson(vm.item)
                .then(function () {
                    $state.reload();
                });            
        }        
    }
})();
