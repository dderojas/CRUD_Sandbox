var express = require('express');
var bodyParser = require('body-parser');
var dbTest = require('../database/index.js');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/getTest', function(req, res) {
  // dbTest.findAll()
  // .then(users => {
  //   console.log('beginning', users, 'end, we did it!');
  // });
  console.log('getTest success', req.body);
  res.status(200).send('all good with getTest');
});

app.post('/postTest', function(req, res) {
  console.log('postTest success', req.body);
  dbTest.update({firstName: req.body.inputField}, {
    where: {
      id: 1
    }
  })
  .then((res) => {
    console.log(res,'got promise')
  })
  .catch((err) => {
    console.log(err,'woops');
  });
  res.status(200).send('all good with postTest');
});

app.listen(3000, function() {
  console.log(`woah you're connected!`);
})