var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mysql = require('mysql2');

const bodyparser = require("body-parser")

var indexRouter = require('./routes/index');

var app = express();


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




  

app.use('/', indexRouter);



module.exports = app;
