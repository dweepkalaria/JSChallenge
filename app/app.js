(function(){ 
'use strict';

angular.module('testApp', [
    'ngRoute', 
    'testApp.table',
    'testApp.services'])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/table'});
  
}]);

}());