var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log(`woah you're connected!`);
})