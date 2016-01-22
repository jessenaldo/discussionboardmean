var mongoose = require('mongoose');
Comment = mongoose.model('Comment');
User = mongoose.model('User');
Answer = mongoose.model('Answer');

module.exports = (function() {
	return {
		create: function(req, res) {
			User.findOne( { _id: req.body.user}, function(err, user) {
				if(err) {
					console.log('Error finding user');
				} else {
					Answer.findOne( {_id: req.body.answer }, function(err, answer) {
						if(err) {
							console.log('Error finding answer')
						} else {
							var comment = new Comment({ content: req.body.content})

							comment._user = user._id;
							comment._answer = answer._id;

							answer.comments.push(comment);
							user.comments.push(comment);

							comment.save(function(err) {
								if(err) {
									console.log('Error saving comment');
								} else {
									answer.save(function(err) {
										if(err) {
											console.log('Error saving answer');
										} else {
											user.save(function(err) {
												if(err) {
													console.log('Error saving user');
												} else {
													console.log('Answer, Comment, User successfully saved');
													res.json(comment);
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