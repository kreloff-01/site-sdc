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

/* keeps count of ng-repeat iteration*/
site.value('monthIteration', 0);

site.factory('dataInit', ['monthIteration', function dataInit(monthIteration){
    var data = [];
    console.log("factory access");
    data.push({month: "September", days: 30, blankDays: 4});
    data.push({month: "October", days: 31, blankDays: 6});
    data.push({month: "November", days: 30, blankDays: 2});
    data.push({month: "December", days: 31, blankDays: 4});

    data.getMonth = function(currMonth){
        return data[currMonth].month;
    }

    data.getDays = function(currMonth){
        return data[currMonth].days;
    }

    data.getblankDays = function(currMonth){
        return data[currMonth].blankDays;
    }
    return data;
}]);

site.controller('tabGen', function($scope, dataInit, monthIteration){
    this.tabs = getTabsToGenerate({
        month:""
    });
    function getTabsToGenerate(tabs) {
        var it, result = [];
        for (var i = 0; i < 4; i++) {
            it = angular.extend({}, tabs);
            month = dataInit.getMonth(monthIteration);
            it.month = month;
            result.push(it);
            monthIteration++;
        }

        return result;
    }
});

/* dynamic tile generation for calendar days -- WIP */
site.controller('gridListCtrl', function($scope) {
    console.log("grid list controller access");
    //this.days = dataInit.getDays(monthIteration);
   // this.blankDays = dataInit.getblankDays(monthIteration);
    this.tiles = buildGridModel({
        background: "",
        footer: ""
    });
    function buildGridModel(tileTmpl){
        var it,results = [ ];
        //console.log(this.days + " normal days func");
       // console.log(this.blankDays + " blank days func");
        for (var j=0; j<this.days; j++) {
            it = angular.extend({},tileTmpl);
            it.title = "";
            it.span  = { row : 1, col : 1 };
            it.background = "blankClass";
            it.footer = "blankClass";
            results.push(it);
        }

        for (var j=0; j<this.blankDays; j++) {
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