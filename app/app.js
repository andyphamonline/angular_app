var app = angular.module("MovieApp", ["MovieServices", "MovieControllers", "ngRoute"]);

app.config([
	"$routeProvider",
	"$locationProvider",
	function($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/index.html",
			controller: "MovieController"
		}).when("/about", {
			templateUrl: "views/about.html"
		}).when("/movie/:id", {
			templateUrl: "views/movie.html",
			controller: "MovieShowController"
		}).when("/favorite", {
			templateUrl: "views/favorite.html",
			controller: "FavoriteController"
		}).otherwise({
			templateUrl: "/views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix("!");
	}

])