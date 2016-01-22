discussionboard_app.controller('userController', function(userFactory, $cookies, $location) {

		this.users = [];


		var _this = this;
		userFactory.index(function(data) {
			console.log(data);
			_this.users = data;
		})

		this.go = function(path) {
			$location.path(path);
		}

		this.addUser = function() {

			console.log(this.newUser);

			var userAlreadyExists = false;


			for (i = 0; i < this.users.length; i++) {
				if(this.users[i].name == this.newUser.name) {
					$cookies.put('userId', this.users[i]._id);
					$cookies.put('userName', this.users[i].name);
					console.log('User already exists, setting user in session now')
					userAlreadyExists = true;
					console.log($cookies.get('userId'))
					console.log($cookies.get('userName'))
					this.go('/dashboard');
				}
			}

			if(userAlreadyExists == false) {

				var _this = this;
				userFactory.create(this.newUser, function() {

					userFactory.index(function(data) {
						_this.users = data;
					})


				}, function(output) {


					console.log('Received from factory user creation')
					console.log(output);
					$cookies.put('userId', output._id);
					$cookies.put('userName', output.name);
					_this.go('/dashboard');
				})
			}

			this.newUser = {};
		}

		

	})