const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const bodyParser = require('body-parser');

const routes = require('./server/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get('*', (req, res) => res.send('welcome to home page here'));
app.use('/', routes);

const server = app.listen(3007, hostname, function () {
	console.log(`Example app listening at ${hostname}:${3007}`);
});
