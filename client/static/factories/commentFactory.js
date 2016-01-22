discussionboard_app.factory('commentFactory', function($http) {

	factory = {};


	factory.create = function(info) {
		$http.post('/comments', info).success(function(output) {
			console.log('Received from server create comment');
			console.log(output);
		})
	}

	return factory;
})