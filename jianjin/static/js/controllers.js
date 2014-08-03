var jianjinControllers = angular.module('jianjinControllers', []);

jianjinControllers.controller('HeaderCtrl', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return $location.path().indexOf(viewLocation) == 0;
  };
});

jianjinControllers.controller('BrowseListCtrl', function ($scope, $http) {
  $http.get('/words/words/').success(function(data) {
    $scope.words = data;
  }).error(function(data, status) {
    $scope.error = data;
    $scope.error_status = status;
  });
});

jianjinControllers.controller('BrowseWordCtrl', function ($scope, $http, $routeParams) {
  $scope.word_id = $routeParams.word_id;
  $http.get('/words/words/' + $routeParams.word_id).success(function(data) {
    $scope.word = data;
  }).error(function(data, status) {
    $scope.error = data;
    $scope.error_status = status;
  });
});

jianjinControllers.controller('FlashcardCtrl', function($scope, $http, $routeParams) {
  $scope.tag = $routeParams.tag;

  $scope.loadData = function() {
    $http.get('/words/flashcard' + ($scope.tag ? '?tag=' + $scope.tag : '')).success(function(data) {
      $scope.word = data;
    }).error(function(data, status) {
      $scope.error = data;
      $scope.error_status = status;
    });
  };

  $scope.loadData();
});
