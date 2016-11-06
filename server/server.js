  var express = require('express');
  var bodyParser = require('body-parser');
  var session = require('express-session');
  var cors = require('cors');
  // var profileCtrl = require('./controllers/profilesCtrl');
  var userCtrl = require('./controller/userCtrl');
  var config = require('./config');
  var port = 3333;
  var app = express();


  var corsOptions = {
    origin: 'http://localhost:8738'
  };

  app.use(bodyParser.json());
  app.use(cors('corsOptions'));


  app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
  }));

  app.use(express.static('public'));
  console.log('this is dirname', __dirname)

  app.get('/api/createUser', userCtrl.UserValues);

  app.post('/api/createUser', userCtrl.CreateUser);
  // console.log('this is login', app.post)
  //

  app.listen(port, function(){
    console.log("Listeing on port ", port);
  });
