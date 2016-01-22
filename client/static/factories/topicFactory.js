discussionboard_app.factory('topicFactory', function($http) {

	factory = {};

	topics = [];

	factory.index = function(callback) {
		$http.get('/topics').success(function(output) {
			topics = output;

			callback(topics);
		})
	}

	factory.create = function(info, callback) {
		$http.post('/topics', info).success(function(output) {
			console.log('Received from server create topic');
			console.log(output);
			socket.emit('created_new_topic')
			callback(topics);
		})
	}

	factory.show = function(info, callback) {
		$http.get('/topics/'+info).success(function(output) {
			console.log('Received from server show topic');
			console.log(output);
			callback(output)
		})
	}

	return factory;
})