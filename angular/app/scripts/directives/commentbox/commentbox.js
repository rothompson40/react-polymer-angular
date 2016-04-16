'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentBox
 * @description
 * # commentBox
 */
angular.module('commentBox', ['commentList', 'commentForm'])
  .directive('commentBox', function ($http) {
    return {
      template: '<div class="commentBox">' +
                  '<h1>Comments</h1>' +
                  '<comment-list comments="data"></comment-list>' +
                  '<comment-form></comment-form>' +
                '</div>',
      restrict: 'E',
      scope: {
        url: '@',
        pollInterval: '@'
      },
      link: function postLink(scope, element, attrs) {
          var timeMessageNumber = 1;
          var incrementMinutes = 1;
          var incrementHours = 1;
          var incrementDays = 1;
          var mins = 1;
          var hours = 1;
          var days = 1;
        var loadCommentsFromServer = function () {
          $http.get(scope.url)
            .success(function(data, status, headers, config){
              scope.data = data;
              if(var i; i < data.length; i++){
                  if(data[i].timeLapse >= timeMessageNumber) {
                      $http.delete(scope.url, data[i].timeStamp).then(function(){
                           mins = incrementminute++
                          $http.post(scope.url, data[i].timeStamp = mins + " minutes ago").
                          success(function(data, status, headers, config){
                                 console.log('minutes increment');

                          })
                      })
                  }
                  if(mins == 60){
                      mins = 0;
                      $http.delete(scope.url, data[i].timeStamp).then(function(){
                           hours = incrementHours++
                          $http.post(scope.url, data[i].timeStamp = hours + " hours ago").
                          success(function(data, status, headers, config){
                                 console.log('hours increment');

                          })
                      })
                  }
                  if(hours = 24){
                      hours = 0;
                      $http.delete(scope.url, data[i].timeStamp).then(function(){
                           days = incrementDays++
                          $http.post(scope.url, data[i].timeStamp = days + " days ago").
                          success(function(data, status, headers, config){
                                 console.log('days increment');

                          })
                      })
                  }
              }
              
          }).error(function(data, status, headers, config){
              console.log(status);
            });
        };
        var handleCommentSubmit = function (event, data) {
          var comment = data;
          scope.data.concat([comment]);
          $http.post(scope.url, comment)
            .success(function(data, status, headers, config){
              console.log('success');

            })
            .error(function(data, status, headers, config){
              console.log(status);
            });
        };
            var counter = function(){
                 timeMessageNumber++;
            }
            
        loadCommentsFromServer();
        setInterval(loadCommentsFromServer, $scope.pollInterval);
            setInterval(counter, 1000);

        scope.$on('submitted', handleCommentSubmit);
          
      }
  });
