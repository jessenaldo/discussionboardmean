var users = require('./../controllers/users.js');
var categories = require('./../controllers/categories.js');
var topics = require('./../controllers/topics.js')
var answers = require('./../controllers/answers.js');
var comments = require('./../controllers/comments.js');

module.exports = function(app) {

	app.get('/users', function(req, res) {
		users.index(req, res);
	})


	
	app.post('/users', function(req, res) {
		console.log(req.body.name);
		users.create(req, res);
	})


	app.get('/topics', function(req, res) {
		topics.index(req, res);
	})

	app.get('/topics/:id', function(req, res) {
		topics.show(req,res);
	})

	app.post('/topics', function(req, res) {

		topics.create(req, res);
	})


	app.get('/answers/:id', function(req, res) {
		answers.index(req,res);
	})

	app.post('/answers', function(req, res) {
		answers.create(req,res);
	})

	app.post('/comments', function(req, res) {
		comments.create(req, res);
	})


	app.get('/categories', function(req, res) {
		categories.index(req, res);
	})

}