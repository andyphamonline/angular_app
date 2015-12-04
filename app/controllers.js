angular.module("MovieControllers", ["MovieServices"])
	.controller("MovieController", ["$scope", "Movie", "MovieFactory", function($scope, Movie, MovieFactory) {
		
		$scope.searchMovie = function(searchTerm) {
			$scope.movies = [];
			$scope.switch = true;
			$scope.test = "test";
			Movie.get({s: searchTerm}, function success(data) {
				$scope.movies = data.Search;
				// $scope.toFavorite = MovieFactory.favorites;
				// console.log($scope.toFavorite);
			}, function error(data) {
				console.log(data);
			});
		}

		$scope.addToFavorite = function(favorite) {
			console.log("favorite", favorite);
			$scope.favorites = [];
			$scope.favorites.push(favorite);
			MovieFactory.favorites = $scope.favorites;
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
	
		
	}]).controller("FavoriteController", ["$scope", "MovieFactory", function($scope, MovieFactory) {
		$scope.favorites = MovieFactory.favorites;
		// window.localStorage.favoritesArray = MovieFactory.favorites;
	}])


	;