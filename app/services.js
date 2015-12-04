angular.module("MovieServices", ["ngResource"])
	.factory("Movie", ["$resource", function($resource) {
		return $resource("http://www.omdbapi.com/");
	}])
	.factory("OneMovie", ["$resource", function($resource) {
		return $resource("http://www.omdbapi.com/");
	}])
	.factory("MovieFactory", function() {
		var _favorites = [];
		return {
			favorites: _favorites
		};
	})
	;