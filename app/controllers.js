angular.module("MovieControllers", ["MovieServices"])
	.controller("MovieController", ["$scope", "Movie", function($scope, Movie) {
		
		$scope.searchMovie = function(searchTerm) {
			$scope.movies = [];
			$scope.switch = true;
			$scope.test = "test";
			Movie.get({s: searchTerm}, function success(data) {
				$scope.movies = data.Search;
			}, function error(data) {
				console.log(data);
			});
		}

		$scope.addToFavorite = function() {
			$scope.favorites = [];
			$scope.test;

		}
	}])
	.controller("MovieShowController", ["$scope", "$routeParams", "OneMovie", function($scope, $routeParams, OneMovie) {
		
		$scope.movies = [];
		console.log($scope.movies);
		OneMovie.get({i: $routeParams.id}, function success(data) {
			$scope.movies = data;
			console.log(data);

		}, function error(data) {
			console.log(data);
		});
	
		
	}]);