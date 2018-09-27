'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'Form',
  'Control',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/form'});
}]).
service('SharedInfoService', ['$rootScope', function($rootScope) {
  var sharedInfoService = {
    info: "We can store info here"
  };
  var updateInfo = function(info) {
    sharedInfoService.info = info;
    $rootScope.$broadcast('info:updated', info);
  };
  sharedInfoService.updateInfo = updateInfo;
  return sharedInfoService;
}]);
