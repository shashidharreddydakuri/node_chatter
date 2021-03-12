require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
	console.log('Mongoose Connection ERROR: ' + err.message);
});

mongoose.connection.once('open', () => {
	console.log('MongoDB Connected!');
});

//Bring in the models
require('./models/User');
require('./models/Chatroom');
require('./models/Message');

const app = require('./app');

app.listen(8000, () => {
	console.log('Server listening on port 8000');
});
