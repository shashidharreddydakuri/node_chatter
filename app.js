const express = require('express');
// const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
	res.send('hello');
});

app.listen(PORT, () => {
	console.log('Server is listening on Port:', PORT);
});
