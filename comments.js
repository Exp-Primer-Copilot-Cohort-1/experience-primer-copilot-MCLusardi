// Create web server
// Start server: node comments.js
// Test: curl -X POST -d '{"author":"Bob","text":"Hello"}' -H "Content-Type:application/json" http://localhost:3000/api/comments
// Test: curl -X GET http://localhost:3000/api/comments
// Test: curl -X GET http://localhost:3000/api/comments/1
// Test: curl -X PUT -d '{"author":"Bob","text":"Hello"}' -H "Content-Type:application/json" http://localhost:3000/api/comments/1
// Test: curl -X DELETE http://localhost:3000/api/comments/1

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

// Use body parser to get POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port to listen
var port = process.env.PORT || 3000;

// Use router for /api
app.use('/api', router);

// Start server
app.listen(port);
console.log('Server started on port ' + port);

// Connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

// Define schema
var CommentSchema = new mongoose.Schema({