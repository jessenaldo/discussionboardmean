discussionboard_app.factory('answerFactory', function($http) {

	factory = {};

	answers = [];

	// factory.index = function(info, callback) {
	// 	$http.get('/answers/'+info).success(function(output) {
	// 		answers = output;

	// 		callback(answers);
	// 	})
	// }

	factory.create = function(info, callback) {
		$http.post('/answers', info).success(function(output) {
			console.log('Received from server create answer');
			console.log(output);
			callback(answers);
		})
	}
	return factory;
})