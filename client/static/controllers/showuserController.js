discussionboard_app.controller('showuserController', function(userFactory, $cookies, $location, $routeParams) {


	this.userId = $routeParams.userId;
	console.log('The user Id is');
	console.log(this.userId);

	var _this = this;
	userFactory.show(this.userId, function(data) {
		console.log(data);
		_this.user = data;
	})

	

})