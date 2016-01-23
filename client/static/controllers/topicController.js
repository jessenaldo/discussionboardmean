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

			// does not work
			// topicFactory.show(this.topicId, function(data) {
			// 	_this.topic = data;
			// })
		})

		this.newAnswer = {};

	}

	this.addComment = function(answer, index) {
		

		this.newComment[index].user = $cookies.get('userId');
		this.newComment[index].answer = answer

		console.log(this.newComment);

		console.log(this.newComment[index])

		var _this = this;
		commentFactory.create(this.newComment[index], function() {

		})

		this.newComment = {};


	}

	this.upvote = function(answer) {

		console.log(answer)
		console.log(answer.upvotes);

		this.newUpVote = answer.upvotes + 1;

		answer.upvotes = this.newUpVote
		console.log(answer.upvotes)


		var _this = this;
		answerFactory.upvote(answer, function() {


		})
	}

	this.downvote = function(answer) {

		
		console.log('here is the answer')
		console.log(answer._id)
		console.log(answer.downvotes);

		this.newDownvote = answer.downvotes + 1;

		answer.downvotes = this.newDownvote
		console.log(answer.downvotes)

		var _this = this;
		answerFactory.downvote(answer, function() {

		})

	}


})