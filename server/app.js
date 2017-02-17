var express = require('express');
var bodyParser = require('body-parser');
//create an express app
var app = express();
//creats a routing object
var contact = require('./api/contacts/index');
//adds the routes for contacts api
app.get('/api/contacts',contact.index);
app.post('/api/contacts',contact.create);
app.put('/api/contacts/:id',contact.update);
app.delete('/api/contacts/:id',contact.delete);
//configure the app to parse JSON-formatted body
app.use(bodyParser.json());


app.get('/',function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("We're up and running!!!");
});
app.listen(8000)

console.log("Server running at http://127.0.0.1:8000/");
