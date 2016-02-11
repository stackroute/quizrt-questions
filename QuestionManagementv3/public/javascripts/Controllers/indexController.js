QuestionManagerApp.controller('index', ['$scope', '$uibModal', '$http', function($scope, $uibModal, $http) {
  // $http.({
  //   method: 'POST',
  //   url: '/QuestionRequestHandler',
  //   data: {requestType: 'list'},
  // })
  // $scope.onSearch = function(e) {
  //   console.log($scope.searchText);
  // };

  $scope = angular.extend($scope, {
    /* Dropdown options */
    noOfQuestions: [10, //first one default
                    25,
                    50,
                    'All'],
    selectedRowCountIndex: 0,
    selectedRowCount: 10,

    questions: [{}],

    /* Pagination Setup */
    firstQuestion: 0,
    currentPage: 1,
    /* searchText */
    searchText:"",
    /* default sort*/
    sortType: '', // set the default sort type
    sortReverse: false  // set the default sort order
  });

  QuestionManager.init({
    $scope: $scope,
    $http: $http,
    $uibModal: $uibModal
  });

}]);
