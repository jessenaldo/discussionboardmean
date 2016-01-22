var mongoose = require('mongoose');
Category = mongoose.model('Category');

module.exports = (function() {
	return {
		index: function(req, res) {
			Category.find({}, function(err, results) {
				if(err) {
					console.log('Error finding categories');
				} else {
					res.json(results);
				}
			})
		}
	}
})()