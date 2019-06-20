const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(8080);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	console.log(`${req.method} request logged to ${req.url}`);
	console.log('body:', req.body);
	console.log('query:', req.query);

	next();
});

app.get('/', function(request, response) {
	response.status(200).send('RESTful Dummy Endpoint: /update-endpoint');
});

app.post('/whcc-callback', function(request, response) {
	response
		.status(200)
		.json(Object.assign({}, request.query, request.body, { __success: true }));
});

console.log('App running');
