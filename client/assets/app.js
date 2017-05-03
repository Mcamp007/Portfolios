var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
  .when('/', { templateUrl: 'partials/contact.html'})
  .otherwise({
    redirectTo: '/'
  });
});
