var express = require('express');
var bodyParser = require('body-parser');
var dbTest = require('../database/index.js');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.get('/getTest', function(req, res) {
  console.log('getTest success');
  dbTest.findAll()
  .then((names) => {
    // console.log(names,'the stuff?');
    // res.json(names);
    res.status(200).send(names);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

app.post('/postTest', function(req, res) {
  console.log('postTest success', req.body);

  dbTest.findOrCreate({
    where: {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  })
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created,'createTest');
  });
  res.status(200).send('all good with postTest');
});

app.patch('/patchTest', function(req, res) {
  // dbTest.update({firstName: req.body.inputField}, {
  //   where: {
  //     id: 1
  //   }
  // })
  // .then((res) => {
  //   console.log(res,'got promise')
  // })
  // .catch((err) => {
  //   console.log(err,'woops');
  // });
});

app.listen(3000, function() {
  console.log(`woah you're connected!`);
})