var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var accounts = require('./routes/accounts');
var webshop = require('./routes/webshop');
var bio = require('./routes/bio');
var ervaring = require('./routes/ervaring');
var documenten = require('./routes/documenten');
var contact = require('./routes/contact');

//var flash = require('connect-flash');
//var session      = require('express-session');
//var configDB = require('./config/database.js');
//var configPassport = require('./config/passport')(passport); // pass passport for configuration
//var jQuery = require("jquery");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon('./public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'gnome child',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join('./public')));

app.use('/', routes);
app.use('/accounts', accounts);
app.use('/webshop', webshop);
app.use('/bio', bio);
app.use('/ervaring', ervaring);
app.use('/documenten', documenten);
app.use('/contact', contact);

//passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//mongoose
mongoose.connect('mongodb://papelierke:kip-rijst6@ds061354.mongolab.com:61354/pieter_willockx_webapps_db');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
