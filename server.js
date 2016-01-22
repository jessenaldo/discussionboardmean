var express = require('express');
var path = require('path');

var app = express()

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(bodyParser.json());


require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app)

app.use(express.static(path.join( __dirname, "./client/static")));

var server = app.listen(8000, function() {
	console.log('Listening on port 8000....');
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket) {
	console.log('client has connected');
	

	socket.on('created_new_topic', function() {
		io.sockets.emit("update_topics_on_views")
	})
})