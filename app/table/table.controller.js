(function () {
    'use strict';

    var app = angular.module('testApp.table', ['ngRoute', 'testApp.services'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/table', {
                templateUrl: 'table/table.template.html',
                controller: 'tableController'
            });
        }])

    app.controller('tableController', function ($scope, $http, userService) {

        var users = {};

        var promise = userService.getUsers();
        promise.then(function (result) {
            users = result;
            $scope.users = users;
        }, function (reason) {
            console.log(reason);
        });

    });

} ());