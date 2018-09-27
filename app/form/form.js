'use strict';

angular.module('Form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', 'SharedInfoService', function($scope, SharedInfoService) {
  $scope.data = 'yo';
  $scope.sharedData = SharedInfoService.info;

  $scope.$on('info:updated', function (event, info) {
    $scope.sharedData = info;
  });
}]);
