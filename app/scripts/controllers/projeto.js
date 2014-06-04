'use strict';

angular.module('hciApp')
  .controller('ProjetoCtrl', function ($scope, $rootScope) {
    $scope.selected = $rootScope.selected;
  });
