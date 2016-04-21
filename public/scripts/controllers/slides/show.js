'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesShowCtrl
 * @description
 * # SlidesShowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesShowCtrl', function ($scope, $routeParams, FireObjects, SubProjectPrefixer) {
    FireObjects.find(SubProjectPrefixer( 'slides'), $routeParams.id).$loaded()
      .then(function(slide) {
        $scope.slide = slide;
      }, function(error) {
        console.error("SlidesShowCtrl Error:", error);
      })
  });
