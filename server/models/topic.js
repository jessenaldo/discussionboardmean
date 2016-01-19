var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema ({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	content: String,
	description: String,
	_category: {type: Schema.Types.ObjectId, ref: 'Category'},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

mongoose.model('Topic', TopicSchema)