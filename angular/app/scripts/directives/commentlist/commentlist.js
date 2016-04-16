'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentList
 * @description
 * # commentList
 */
angular.module('commentList', ['comment'])
  .directive('commentList', function () {
    return {
<<<<<<< HEAD
      template: '<div class="commentList" +
=======
      template: '<div class="commentList">' +
>>>>>>> 78229f11350475c3bf945ed646dfe99f121d8cb7
                  '<comment-model ng-repeat="comment in comments" author="{{comment.author}}">' +
                    '{{comment.msg}}' + '{{comment.timeStamp}}' +
                  '</comment-model>' +
                  '<span ng-if="comments.length < 1">No comments yet</span>' +
                '</div>',
      restrict: 'E',
      scope: {
        comments: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
