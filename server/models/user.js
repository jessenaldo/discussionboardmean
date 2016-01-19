var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

mongoose.model('User', UserSchema);
