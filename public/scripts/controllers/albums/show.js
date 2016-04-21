'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AlbumsshowCtrl
 * @description
 * # AlbumsshowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AlbumsShowCtrl', function ($scope, $routeParams, FireObjects, SubProjectPrefixer) {
    FireObjects.find(SubProjectPrefixer( 'albums'), $routeParams.id).$loaded()
      .then(function(album) {
        $scope.album = album;
        //convert back date from persistent
        $scope.album.date= new Date(album.date);
      }, function(error) {
        console.error("AlbumsShowCtrl Error:", error);
      })

  });
