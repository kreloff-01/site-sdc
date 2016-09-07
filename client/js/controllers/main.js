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

/* individual calendar day items */
site.factory('calendarItems', function calendarItems(){
    var data = [];


    data.push({month: "September", 6: "classes begin", 14: "student org fair", 15: "student org fair",
    17:"kickoff meeting CS2112 @ 6pm", 24: "club meeting CS2112 @ 6pm"});
    data.push({month: "October", 1: "meeting ft. Capital One", 8: "club meeting \n CS2112 @ 6pm",
    15: "club meeting\n CS2112 @ 6pm ", 22:"club meeting \n CS2112 @ 6pm", 29: "club meeting \n CS2112 @ TBA"});
    data.push({month: "November", 5: "club meeting\n CS2112 @ 6pm ", 12: "club meeting\n CS2112 @ 6pm ",
    19: "club meeting\n CS2112 @ 6pm ", 26: "no meeting - Thanksgiving"});
    data.push({month: "December", 3: "club meeting\n CS2112 @ 6pm", 10: "final club meeting :(\n CS2112 @ 6pm",
    });

    data.getInfo = function(month, day){
        if(data[month].hasOwnProperty(day.toString()) == false){
            return "";
        }
        else return data[month][day];
    }
    return data;
});




/* keeps count of ng-repeat iteration and handles data retrival*/
site.factory('dataInit', function dataInit(){
    var counter = 0;
    var data = [];

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

    data.getCounter = function(){
        return counter;
    }

    data.updateCounter = function(){
        counter++;
    }

    data.resetCounter = function(){
        counter = 0;
    }
    return data;
});

site.controller('tabGen', function($scope, dataInit){
    this.tabs = getTabsToGenerate({
        month:""
    });
    function getTabsToGenerate(tabs) {
        var it, result = [];
        for (var i = 0; i < 4; i++) {
            it = angular.extend({}, tabs);
            month = dataInit.getMonth(dataInit.getCounter());
            it.month = month;
            result.push(it);
            dataInit.updateCounter();
        }
        dataInit.resetCounter();
        return result;
    }
});

/* dynamic tile generation for calendar days -- WIP */
site.controller('gridListCtrl', function($scope, dataInit, calendarItems) {
    var days = dataInit.getDays(dataInit.getCounter());
    var blankDays = dataInit.getblankDays(dataInit.getCounter());
    var month = dataInit.getCounter();
    this.tiles = buildGridModel({
        background: "",
        footer: "",
        info: ""
    });
    function buildGridModel(tileTmpl){
        var it,results = [ ];
        for (var j=0; j<blankDays; j++) {
            it = angular.extend({},tileTmpl);
            it.title = "";
            it.span  = { row : 1, col : 1 };
            it.background = "blankClass";
            it.footer = "blankClass";
            results.push(it);
        }

        for (var j=0; j<days; j++) {
            it = angular.extend({},tileTmpl);
            it.title = (j+1);
            it.span  = { row : 1, col : 1 };
            it.background = "tileBackground";
            it.info = calendarItems.getInfo(month, j+1);
            results.push(it);
        }
        dataInit.updateCounter();
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