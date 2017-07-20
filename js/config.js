//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.config(function($routeProvider) {

  $routeProvider
    .when('/words', {
      controller: 'routeCtrl',
      templateUrl: 'words.html'
    });




});
