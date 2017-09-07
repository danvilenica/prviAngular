(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'App/main/main.html',
                controller: 'main',
                controllerAs: 'vm',
                resolve: {
                    people: function (data) {
                        return data.getData();
                    }
                }
            })
            //.state('main.save', {
            //    url: 'save',
            //    templateUrl: 'App/save/save.html',
            //    controller: 'save',
            //    controllerAs: 'vm'
            //})
            //.state('main.cancel', {
            //    url: 'cancel',
            //    templateUrl: 'App/cancel/cancel.html',
            //    controller: 'cancel',
            //    controllerAs: 'vm'
            //})
            .state('main.edit', {
                url: 'edit/:id',
                templateUrl: 'App/add/add.html',
                controller: 'add',
                controllerAs: 'vm',
                data: {
                    isEdit: true
                },
                resolve: {
                    person: function (data, $stateParams) {                        
                        return data.getpersonById($stateParams.id);
                    } 
                }
            })
            .state('main.add', {
                url: 'add',
                templateUrl: 'App/add/add.html',
                controller: 'add',
                controllerAs: 'vm',
                data: {
                    isEdit: false
                },
                resolve: {
                    person: function () {
                        return {};
                    }
                }
            })
            .state('main.delete', {
                url: 'delete/:id',
                templateUrl: 'App/delete/delete.html',
                controller: 'deletePerson',
                controllerAs: 'vm',
                resolve: {
                    person: function (data, $stateParams) {
                        return data.getpersonById($stateParams.id);
                    }
                }
            });
    }
})();
