const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');


const indexRouter = require('./controllers/index');

const app = express();
if (process.env.NODE_ENV === 'production') {
  app.disable('x-powered-by');
  app.use(compression());
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
