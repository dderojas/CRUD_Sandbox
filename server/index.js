var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/hey', function(req, res) {
  console.log('got stuff', req.body);
  res.status(200).send('sent back stuff!');
});

app.listen(3000, function() {
  console.log(`woah you're connected!`);
})