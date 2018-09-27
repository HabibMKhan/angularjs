'use strict';

angular.module('Control', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/control', {
    templateUrl: 'control/control.html',
    controller: 'Control2Ctrl'
  });
}])

.controller('Control2Ctrl', ['$scope', 'SharedInfoService', function($scope, SharedInfoService) {
  $scope.data = "Hey";
  $scope.sharedData = SharedInfoService.info;



  $scope.shareInfo = function (info) {
    SharedInfoService.updateInfo(info);
  };

  $scope.$on('info:updated', function (event, info) {
    $scope.sharedData = info;
  });
}]);
