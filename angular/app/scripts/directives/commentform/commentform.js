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
          var timeLapse = 1;
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
                 timeLapse++;
                  if(timeLapse == 59){
                      timeLapse = 0;
                       min = 1;
                          min++;
                      var updateMin = min +' minutes ago';
            angular.extend(scope.comment, {'timeStamp': updateMin});
                    scope.$emit('updated', comment);

                  }
                  if(min == 59){
                      min = '';
                      hour = 1;
                      hour++;
                      var updateHour = hour + ' hours ago';
            angular.extend(scope.comment, {'timeStamp': updateHour});
                    scope.$emit('updated', comment);
                  }
                   if(hour == 23){
                      min = '';
                      hour = '';
                      day = 1;
                      day++;
                      var updateDay = day + ' days ago';
            angular.extend(scope.comment, {'timeStamp': updateDay});
                     scope.$emit('updated', comment);
                  }


              }, 1000);
          scope.$emit('submitted', comment);
          scope.comment = {};
        }
      }
    };
  });
