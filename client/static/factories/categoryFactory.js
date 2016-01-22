discussionboard_app.factory('categoryFactory', function($http) {
		factory = {};

		categories = [];

		factory.index = function(callback) {
			$http.get('/categories').success(function(output) {
				categories = output;

				callback(categories);
			})
		}

		return factory;
	})