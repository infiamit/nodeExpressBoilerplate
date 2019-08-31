var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');


var indexRouter = require('./controllers/index');

var app = express();
if (process.env.NODE_ENV === 'production') {
    app.disable('x-powered-by');
    app.use(compression())
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



module.exports = app;
