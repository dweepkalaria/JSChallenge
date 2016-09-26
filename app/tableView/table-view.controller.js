(function () {
    'use strict';

    angular.module('testApp.tableView', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/tableView', {
                templateUrl: 'tableView/table-view.template.html',
                controller: 'tableViewController'
            });
        }])

        .controller('tableViewController', ['$scope', '$http',

            function ($scope, $http) {

                $http.get("http://jsonplaceholder.typicode.com/posts")
                    .success(function (data, status, headers, config) {
                        $scope.users = data;
                    });

                
            }

        ]);

} ());