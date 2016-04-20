// module

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// route
weatherApp.config(function($routeProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});
    


// controller

weatherApp.controller('homeController', ['$scope', function($scope) {
    
    
    
}]);

weatherApp.controller('forecastController', ['$scope', function($scope) {
    
    
}]);


// resource


