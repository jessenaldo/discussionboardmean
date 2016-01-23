discussionboard_app.controller('dashboardController', function(topicFactory, categoryFactory, $cookies, userFactory, $location) {

	// working = 'working'
	// socket.emit("this_is_working", working)

	console.log('User id in session');
	console.log($cookies.get('userId'));
	this.userName = $cookies.get('userName');

	this.topics = [];
	this.categories = [];

	var _this = this;
	socket.on('update_topics_on_views', function() {

		topicFactory.index(function(data) {
			console.log(data);
			_this.topics = data;
		})
	})

	var _this = this;
	categoryFactory.index(function(data) {
		console.log(data);
		_this.categories = data;
	})

	
	topicFactory.index(function(data) {
		console.log(data);
		_this.topics = data;
	})

	this.addTopic = function() {
		

		this.newTopic.user = $cookies.get('userId');
		console.log(this.newTopic.category._id);


		var _this = this;
		topicFactory.create(this.newTopic, function() {

			topicFactory.index(function(data) {
				_this.topics = data;
			})
		})

		this.newTopic = {};

	}

	this.showUser = function(user) {
		console.log(user)
	}


})