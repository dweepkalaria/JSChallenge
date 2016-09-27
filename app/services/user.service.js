(function () {
    'use strict';

    var services = angular.module('testApp.services', [])
        .service('userService', function ($http, $q) {

            this.getUsers = function () {

                var dfr = $q.defer();

                $http.get("http://jsonplaceholder.typicode.com/posts")
                    .success(function (data, status, headers, config) {
                        dfr.resolve(data);
                    })
                    .error(function (message) {
                        dfr.reject('Error while getting the data');
                    });

                return dfr.promise;
            }

        });

} ());