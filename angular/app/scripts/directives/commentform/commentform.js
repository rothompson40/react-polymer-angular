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
          var timeMessageLoaded = 1;
          var counter = function(){
                 timeMessageLoaded++;
            }
        setInterval(counter, 1000);
          
        scope.comment = {};
        scope.submitComment = function(){
            angular.extend(scope.comment, {'timeStamp':' 1 minute ago'},{'timeLapse': timeMessageLoaded});
          var comment = scope.comment;
          if (!comment.msg || !comment.author) {
            return;
          }
           
          scope.$emit('submitted', comment);
          scope.comment = {};
        }
        
      }
    };
  });
