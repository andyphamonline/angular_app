services.js

.factory("OneMovie", ["$resource", function($resource) {
		return $resource("http://www.omdbapi.com/", {i: "tt0076759"}, {query: {method: "GET", isArray: false}});
	}])

	;

index.html
<a href="#!/favorite" class="col-xs-3 col-sm-3 col-md-3 col-lg-3 btn btn-info" ng-click="addToFavorite(movie)">Add To Favorite</a>