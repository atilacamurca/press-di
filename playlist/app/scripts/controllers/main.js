'use strict';

angular.module('playlistApp')
   .controller('MainCtrl', ['$scope', 'albumsList',
      function ($scope, albumsList) {
         $scope.search = "";
         $scope.albums = albumsList.all();
         
         $scope.onSearch = function () {
            console.log($scope.search.length);
            if ($scope.search.length > 0) {
               $scope.albums = albumsList.find($scope.search);
            } else {
               $scope.albums = albumsList.all();
            }
         };
  }]);