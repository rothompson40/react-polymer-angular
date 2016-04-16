'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentForm
 * @description
 * # commentForm
 */
angular.module('commentForm', [])
  .directive('commentForm', function ($interval) {
    return {
      template: '<form class="commentForm" name="form">' +
                  '<input type="text" placeholder="Your name" ng-model="comment.author" name="author"/>' +
                  '<input type="text" placeholder="Say something..." ng-model="comment.msg" name="msg"/>' +
                  '<input type="submit" value="Post" ng-click="submitComment()"/>' +
                '</form>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          var timeLapse;
          var min;
          var hour;
          var days;
          
        scope.comment = {};
        scope.submitComment = function(){
            angular.extend(scope.comment, {'timeStamp':' 1 minute ago'});
          var comment = scope.comment;
          if (!comment.msg || !comment.author) {
            return;
          }
              $interval(function(){
                 timeLapse = scope.comment.timeLapse;
                 timeLapse++;
                  if(timeLapse == 59){
                      timeLapse = 0;
                       min = 1;
                          min++;
                      var updateMin = min +'minutes ago';
            angular.extend(scope.comment, {'timeStamp': updateMin});
                    
                  }
                  if(min == 59){
                      min = '';
                      hour = 1;
                      hour++;
                      var updateHour = hour + 'hours ago';
            angular.extend(scope.comment, {'timeStamp': updateHour});
                  }
                   if(hour == 23){
                      min = '';
                      hour = '';
                      day = 1;
                      day++;
                      var updateday = day + 'days ago';
            angular.extend(scope.comment, {'timeStamp': updateday});
                  }
                  
              }, 1000);
          scope.$emit('submitted', comment);
          scope.$emit('updateTime', comment);
          scope.comment = {};
        }
      },
      controller: 'timeLapseController'
    };
  });
