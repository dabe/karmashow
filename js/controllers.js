/* Controllers */

function KarmaShowCtrl($scope, $http, $log) {

	$http.jsonp('http://www.reddit.com/search.json?q=site%3Ayoutube.com&limit=100&sort=top&t=week&jsonp=JSON_CALLBACK')
		.success(function(data) {
			$scope.redditjson=data;
	});
}


