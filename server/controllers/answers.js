var mongoose = require('mongoose');
Answer = mongoose.model('Answer');
Topic = mongoose.model('Topic');
User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(req, res) {
			console.log(req.params.id);

			// Topic.find({ _id: req.params.id}).populate()

		},
		create: function(req, res) {
			
			User.findOne( {_id: req.body.user}, function(err, user) {
				if(err) {
					console.log('Error finding user');
				} else {
					Topic.findOne( {_id: req.body.topic }, function(err, topic) {
						if(err) {
							console.log('Error finding topic');
						} else {
							var answer = new Answer({ content: req.body.content })
							
							answer._user = user._id;
							answer._topic = topic._id;
							
							topic.answers.push(answer);

							answer.save(function(err) {
								if(err) {
									console.log('Error saving answer');
								} else {
									topic.save(function(err) {
										if(err) {
											console.log('Error saving topic');
										} else {
											user.save(function(err) {
												if(err) {
													console.log('Error saving user');
												} else {
													console.log('Answer, User, Topic successfully saved');
													res.json(answer)
												}
											})
										}
									})
								}
							})
						}
					})
				}

			})


		}
	}
})()