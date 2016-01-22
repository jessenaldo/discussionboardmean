discussionboard_app.controller('topicController', function(topicFactory, $routeParams, answerFactory, $cookies, commentFactory) {


	this.topicId = $routeParams.topicId
	console.log('The topic Id is');
	console.log(this.topicId)

	var _this = this;
	topicFactory.show(this.topicId, function(data) {
		console.log(data);
		_this.topic = data;

	})

	// answerFactory.index(this.topicId, function(data) {
	// 	_this.answers = data;
	// })

	this.addAnswer = function() {
		console.log(this.newAnswer);

		this.newAnswer.user = $cookies.get('userId');
		this.newAnswer.topic = this.topicId;

		var _this = this;
		answerFactory.create(this.newAnswer, function() {

			topicFactory.show(this.topicId, function(data) {
				_this.topic = data;
			})
		})

		this.newAnswer = {};

	}

	this.addComment = function(answer) {
		

		this.newComment.user = $cookies.get('userId');
		this.newComment.answer = answer

		console.log(this.newComment);

		var _this = this;
		commentFactory.create(this.newComment, function() {

		})

		this.newComment = {};


	}


})