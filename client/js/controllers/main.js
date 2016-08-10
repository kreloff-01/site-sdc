var site = angular.module('sdc')

.controller("mainController", function($scope, $http) {
});

/* works */
(function () {
  'use strict';

  site.controller('ScheduleCtrl', ScheduleCtrl);

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

/* current element WIP*/

site.directive("testDir", function () {
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

/* dynamic tile generation for calendar days -- WIP */
site.controller('gridListCtrl', function($scope) {
      this.tiles = buildGridModel({
        background: ""
      });
        function buildGridModel(tileTmpl){
            var it, results = [ ];
            for (var j=0; j<30; j++) {
                it = angular.extend({},tileTmpl);
                it.title = (j+1);
                it.span  = { row : 1, col : 1 };
                it.background = "tileBackground";
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

/* days of the week -- works */
site.controller('daysOfWeek', function($scope){
    this.getDays = getDayOfWeek({
        day: ""
    });
    function getDayOfWeek(dayTmpl){
        var it, result = [ ], days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday"];
        for(var i=0; i<7; i++){
            it = angular.extend({},dayTmpl);
            it.day = days[i];
            result.push(it);
        }
        return result;
    }
});