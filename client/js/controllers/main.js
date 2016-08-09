var main = angular.module('sdc')

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

/* current element */

main.directive("testDir", function () {
    function link(scope, element) {
    }
    return {
        restrict: "AE",
        link: link,
        controller:function($scope,$element){
            $scope.name2 = 'this is second name';
            var barGridSection = $element.find('#barGridSection'); //helps to find the child element.
            console.log("does this work?");
        }

    };
})

/* dynamic tile generation for calendar days */
angular
    .module('sdc')
    .controller('gridListDemoCtrl', function($scope) {
      this.tiles = buildGridModel({
        background: ""
      });
        function buildGridModel(tileTmpl){
            var it, results = [ ];
            for (var j=0; j<11; j++) {
                it = angular.extend({},tileTmpl);
                it.title = (j+1);
                it.span  = { row : 1, col : 1 };
                it.background = "white";
                results.push(it);
            }
            return results;
        }

      this.info = generateInfo({
        day: "",
        content: ""
      });
        function generateInfo(currTile){
            var information = [ ];
            
        };

    });

