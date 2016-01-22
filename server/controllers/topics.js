var mongoose = require('mongoose');
Topic = mongoose.model('Topic');
User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(req, res) {
			Topic.find({}).populate('_category').populate('_user').exec(function(err, results) {
				if(err) {
					console.log('Error finding topics');
				} else {
					// console.log(results);
					res.json(results);
				}
			})
		},
		create: function(req, res) {
			
			User.findOne( { _id: req.body.user }, function(err, user) {

				var topic = new Topic({ content: req.body.content, description: req.body.description, _category: req.body.category._id })
				topic._user = user._id;

				user.topics.push(topic);

				topic.save(function(err) {
					if(err) {
						console.log('Error saving topic');
					} else {
						user.save(function(err) {
							if(err) {
								console.log('Error saving user for topic');
							} else {
								console.log('Topic and User successfully saved');
								res.json(topic);
							}
						})
					}
				})

			})
		},
		// show: function(req, res) {
		// 	console.log('Id of the topic to be shown is ' + req.params.id);

		// 	Topic.findOne( {_id: req.params.id}).populate('_user').populate('_category').populate('answers')

		// 	.populate({
		// 		path: 'answers',
		// 		populate: { path: '_user'}
		// 		// populate: { path: 'comments'},
		// 	})

		// 	// .populate({
		// 	// 	path: 'answers.comments',
		// 	// 	populate: { path: 'comments'}
		// 	// })

		// 	// .populate({
		// 	// 	path: 'bucketlistitems',
		// 	// 	populate: { path: ['_creator', '_user'] }
		// 	// })

		// 	//or
		// 	// .populate({
		// 	// 	path: 'bucketlistitems',
		// 	// 	populate: { path: '_creator _user'}
		// 	// })


		// 	.exec(function(err, topic) {

		// 		if(err) {
		// 			console.log('Error finding topic');
		// 		} else {
		// 			res.json(topic)

		// 			}
		// 	})
		// }
		show: function(req, res) {

			Topic.findOne({_id: req.params.id}).deepPopulate('_user _category answers answers._user answers.comments answers.comments._user')

			.exec(function(err, topic) {
				if(err) {
					console.log('Error finding topic');
				} else {
					res.json(topic)
				}
			})
		}
		}
	}
)()