/* Controllers */

function KarmaShowCtrl($scope, $http, $log, $location) {

	$scope.loadData = function() {
		var sort = ($location.search()).sort;
		if (typeof(sort) == 'undefined') { sort = 'top'; }
		var subreddit = ($location.search()).subreddit;
		if (typeof(subreddit) == 'undefined') { subreddit = '*'; }
		var time = ($location.search()).t;
		if (typeof(time) == 'undefined') { time = 'week'; }

		$scope.loading = true;
		$scope.$apply();
		$http.jsonp('http://www.reddit.com/search.json?q=site%3Ayoutube.com+subreddit%3A'+subreddit+'&limit=100&sort='+sort+'&t='+time+'&jsonp=JSON_CALLBACK')
			.success(function(data) {
				$scope.redditjson=data;
				$scope.loading=false;
				$scope.$apply();
			});
	}

	$scope.loadData();

	$scope.$location = $location;
}


