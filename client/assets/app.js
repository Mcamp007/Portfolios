var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/', { templateUrl: 'partials/main.html'})
    .when('/pacman', { templateUrl: 'partials/pacman.html'})
    .otherwise({
      redirectTo: '/'
    });
});
