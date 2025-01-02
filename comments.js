// Create web server that listens on port 3000
// Respond to GET requests to /comments with a JSON object of comments
// Respond to POST requests to /comments with a JSON object of the new comment
// Respond to PUT requests to /comments with a JSON object of the edited comment
// Respond to DELETE requests to /comments with a JSON object of the deleted comment

const http = require('http');
const url = require('url');
const qs = require('querystring');

let comments = [];