QuestionManagerApp.controller('EditQuestionControl', ['$scope','$http', '$mainControllerScope',
  function($scope, $http, $mainControllerScope) {
    angular.extend($scope,$mainControllerScope);
    EditModalManager.init({
      $scope: $scope,
      $http: $http
    });
  }
]);
