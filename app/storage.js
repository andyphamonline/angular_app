services.js

.factory("OneMovie", ["$resource", function($resource) {
		return $resource("http://www.omdbapi.com/", {i: "tt0076759"}, {query: {method: "GET", isArray: false}});
	}])

	;