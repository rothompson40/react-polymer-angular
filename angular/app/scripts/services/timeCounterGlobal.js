'use strict';

angular.module('angularApp').
  factory('timerCounter', function($interval){
    var globalSeconds = 1;
    var countDown = function(){
      $interval(function(){
        globalSeconds++;
        if(globalSeconds == 59){
          globalSeconds = 0
        }
      }, 1000)
    };

    return {
      globalSeconds: globalSeconds,
      countDown: countDown
    }
  });


