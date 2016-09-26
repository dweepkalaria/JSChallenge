(function(){ 
'use strict';

angular.module('testApp', [
    'ngRoute', 
    'testApp.tableView'])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/tableView'});
  
}]);

}());