'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentList
 * @description
 * # commentList
 */
angular.module('commentList', ['comment'])
  .directive('commentList', function ($interval) {
    return {
      template: '<div class="commentList" ng-controller="timeLapseController">' +
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
          var timeLapse;
          scope.$watch('data', function(){
              $interval(function(){
                 timeLapse = scope.comment.timeLapse;
                 timeLapse++;
                  if(timeLapse == 59){
                      var min = 1;
                          min++;
                      comment.timeStamp = min + "minutes ago"
                  }
              }, 1000);
          })
      }
    };
  });
