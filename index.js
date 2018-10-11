/* Project Indigo */
/* Melissa Iori 2018 */
/* Runs with Node.js */
/* Use the command "node index.js" without quotes to run the web application on your server */

var express = require('express');
var http = require('http');
var io = require('socket.io')(http);

//Body parser, cookie parser and session go here

var app = express();
// May not use if just serving API
app.set('view engine', 'pug');

/* HTML here */
app.use(express.static('public'));

/* Use for API only */
app.get('/', function (req, res) {
  res.render('index', { title: 'Project Indigo', message: 'Project Indigo' });
});

app.listen(80, function () {
  console.log('Project Indigo is running on port 80.');
});