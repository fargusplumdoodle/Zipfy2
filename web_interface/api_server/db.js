const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost:27017/msgsdb';
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
	console.log('Mongoose connection error:' + err);
});
mongoose.connection.on('disconnected', () => {
	console.log('Mongoose disconnected');
});

require('../app_server/models/message_schema');
