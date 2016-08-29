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

/* current element WIP

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
}) */

site.controller('tabGen', function($scope){
    var filledDays, blankDay;
    this.tabs = getTabsToGenerate({
        days:"",
        blankDays:"",
        month:""
    });
    function getTabsToGenerate(tabs) {
        var it, result = [], data = [];
        data.push({month: "September", days: 30, blankDays: 4});
        data.push({month: "October", days: 31, blankDays: 6});
        data.push({month: "November", days: 30, blankDays: 2});
        data.push({month: "December", days: 31, blankDays: 4});
        for (var i = 0; i < 4; i++) {
            it = angular.extend({}, tabs);
            it.days = data[i].days;
            it.month = data[i].month;
            it.blankDays = data[i].blankDays;
            result.push(it);
        }
        return result;
    }
});

/* dynamic tile generation for calendar days -- WIP */
site.controller('gridListCtrl', function($scope) {
    $scope.init = function(days, blankDays){
        $scope.normalDays = days;
        $scope.emptyDays = blankDays;
        console.log($scope.normalDays + " normal days init");
        console.log($scope.blankDays + " blank days init");
    };

    this.tiles = buildGridModel({
        background: "",
        footer: ""
    });
    function buildGridModel(tileTmpl){
        var it,results = [ ];
        console.log($scope.normalDays + " normal days func");
        console.log($scope.blankDays + " blank days func");
        for (var j=0; j<$scope.emptyDays; j++) {
            it = angular.extend({},tileTmpl);
            it.title = "";
            it.span  = { row : 1, col : 1 };
            it.background = "blankClass";
            it.footer = "blankClass";
            results.push(it);
        }

        for (var j=0; j<$scope.normalDays; j++) {
            it = angular.extend({},tileTmpl);
            it.title = (j+1);
            it.span  = { row : 1, col : 1 };
            it.background = "tileBackground";
            results.push(it);
        }
        return results;
    }
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