'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl!');
  $scope.clickButton = (...args) => {
    let [a,b,c] = [1,2,3];
    console.log('this: ',this);
    console.log('args: ',args);
  }
});
