var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          });
});
app.controller('cfgController',function($scope){

    /*     
    Here you can handle controller for specific route as well.
    */
});