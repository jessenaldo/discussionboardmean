
discussionboard_app.factory('userFactory', function($http) {
		factory = {};

		users = [];

		factory.index = function(callback) {
			$http.get('/users').success(function(output) {
				users = output;

				callback(users);
			})
		}

		factory.create = function(info, callback, callback2) {
			$http.post('/users', info).success(function(output) {
				console.log('Received from server create user')
				console.log(output)

				callback(users);
				callback2(output);
			})
		}

		return factory;


	})