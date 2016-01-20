var mongoose = require('mongoose');
User = mongoose.model('User');

module.exports = (function() {
	return {
		index: function(req, res) {
			User.find({}, function(err, results) {
				if(err) {
					console.log('Error finding users');
				} else {
					res.json(results);
				}
			})
		},
		create: function(req, res) {
			user = new User({name: req.body.name})

			user.save(function(err) {
				if(err) {
					console.log('Error saving user');
				} else {
					res.json(user);
				}
			})
		}
	}
})()