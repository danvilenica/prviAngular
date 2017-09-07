(function () {
    'use strict';

    angular
        .module('app')
        .factory('data', data);

    data.$inject = ['$http'];

    function data($http) {
        
        var service = {
            getData: getData,
            addPerson: addPerson,
            editPerson: editPerson,
            getpersonById: getpersonById,
            deletePerson: deletePerson
        };

        return service;

        function getData() {
            return $http.get('api/persons')
                .then(function (response) {
                    return response.data;
                });
        }

        function addPerson(person) {
            return $http.post('api/persons', person)
                .then(function (response) {
                    console.log(response);
                }, function (rejection) {
                    console.log(rejection.data);
                });              
        }

        function editPerson(person) {            
            return $http.put('api/persons', person)
                .then(function (response) {
                    console.log(response);
                }, function (rejection) {
                    console.log(rejection.data);
                });
        }

        function getpersonById(id) {
            return $http.get('api/persons/'+ id)
                .then(function (response) {
                    return response.data;
                });
        }

        function deletePerson(person) {
            return $http.delete('api/persons/' + person.id)
                .then(function (response) {
                   console.log(response);
                }, function (rejection) {
                    console.log(rejection.data);
                });
        }
    }
})();