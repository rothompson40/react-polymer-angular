'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentForm
 * @description
 * # commentForm
 */
angular.module('commentForm', [])
  .directive('commentForm', function () {
    return {
      template: '<form class="commentForm" name="form">' +
                  '<input type="text" placeholder="Your name" ng-model="comment.author" name="author"/>' +
                  '<input type="text" placeholder="Say something..." ng-model="comment.msg" name="msg"/>' +
                  '<input type="submit" value="Post" ng-click="submitComment()"/>' +
                '</form>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.comment = {};
        scope.submitComment = function(){
            angular.extend(scope.comment, {'timeStamp':' 1 minute ago'}, {'timeLapse': 1});
          var comment = scope.comment;
          if (!comment.msg || !comment.author) {
            return;
          }

          scope.$emit('submitted', comment);
          scope.comment = {};
        }
      },
      controller: 'timeLapseController'
    };
  });
