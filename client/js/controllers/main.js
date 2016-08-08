angular.module('sdc')

.controller("mainController", function($scope, $http) {
});

(function () {
  'use strict';

  angular
      .module('sdc')
      .controller('ScheduleCtrl', ScheduleCtrl);

  function ScheduleCtrl ( $scope ) {
    $scope.data = {
      selectedIndex: 0,
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  }
})();

