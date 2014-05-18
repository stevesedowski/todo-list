var listApp = angular.module('listApp', {});

listApp.controller('listCtrl', function ($scope) {
  $scope.todos = [];
  $scope.ToDoSum = 0;
  
  $scope.addTodo = function(e){
    e.preventDefault();
    $scope.todos.push($scope.nextTodo);
    $scope.ToDoSum = $scope.todos.length;
    $scope.nextTodo = '';
  };
  $scope.subtractTodo = function(index) {
    $scope.todos.splice(index, 1);
    $scope.ToDoSum = $scope.todos.length;
  };
  $scope.resetTodos = function(e){
    e.preventDefault();
    $scope.todos = [];
    $scope.ToDoSum = 0;
  };

});